import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography,Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "./UserList.css"

function UserList() {
  const users = useSelector((state) => state.users.users);
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper} className="userListContainer">

    
      <Typography variant="h5" className="userListTitle">User List</Typography>

      {users.length === 0 ? (
        <Typography>No users created yet.</Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Role</b></TableCell>
              <TableCell><b>Inbox</b></TableCell>
              <TableCell><b>Invite</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.firstName} {user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.inbox}</TableCell>
                <TableCell>{user.invite ? "Yes" : "No"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <Box  style={{padding:"10px"}}>
      <Button  variant="contained" color="primary" onClick={() => navigate("/")}>Create Another User</Button>

      </Box>

    </TableContainer>
  );
}

export default UserList;