import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../Container/UserSlice';
import { styled } from '@mui/material/styles';

import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Button,
  Box,
  Typography,
  Switch,
} from '@mui/material';
import './UserData.css';
import { useNavigate } from 'react-router-dom';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#65C466',
        opacity: 1,
        border: 0,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

function CreateUserForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('scout@helpscout.com');
  const [role, setRole] = useState('');
  const [inbox, setInbox] = useState('');
  const [invite, setInvite] = useState(true);

  const handleCreateUser = () => {
    const userData = {
      firstName,
      lastName,
      email,
      role,
      inbox,
      invite,
    };
    dispatch(addUser(userData)); 
    navigate('/users'); 
  };

  return (
    <Box className="formContainer">
      <div className="header">
        <Typography variant="h5" className="formTitle">
          Create User
        </Typography>
      </div>

      <div className="formBody">
        <Typography className="sectionTitle">Name</Typography>

        <Box className="subfields">


            <TextField
              fullWidth
              className="smallInput"

              InputLabel="firstName"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <TextField
              fullWidth
              className="smallInput"

              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

        </Box>

        <Typography className="sectionTitle">Email Address</Typography>
        <div>
          <TextField
            fullWidth
            className="smallInputEmail"

            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '3px' }}
          />
        </div>

        <Typography className="sectionTitle">Role</Typography>
        <div>
          <FormControl fullWidth variant="outlined" style={{ padding: '5px' }} className="smallSelect">
            <Select
              
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Typography className="sectionTitle">Inboxes</Typography>
        <Typography variant="body2" color="textSecondary">
          Which inboxes will this user need access to?
        </Typography>
        <div>
          <FormControl fullWidth variant="outlined" style={{ padding: '5px' }} className="smallSelect">
            <Select
             
              value={inbox}
              onChange={(e) => setInbox(e.target.value)}
            >
              <MenuItem value="inbox1">Inbox 1</MenuItem>
              <MenuItem value="inbox2">Inbox 2</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Box>
          <div className="switchContainer">
            <div>
              <Typography style={{left:"10px"}} className="sectionTitle">Send an invite email?</Typography>
              <Typography variant="body2" color="textSecondary">
                An invite can be sent later if you aren't ready.
              </Typography>
            </div>
            <div>
              <FormControlLabel style={{left:"3px"}}
                control={
                  <IOSSwitch
                    checked={invite}
                    onChange={(e) => setInvite(e.target.checked)}
                  />
                }
              />
            </div>
          </div>
        </Box>
      </div>

     

        <Box sx ={{display:"flex", justifyContent:"space-between"}}  >
          <Button style={{border:"none", color:"blue",fontSize:"12px"}}
            color="secondary"
            className="cancelButton"
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleCreateUser}>
            Create User
          </Button>
          
        </Box>
       
    </Box>
  );
}

export default CreateUserForm;