import './App.css';
import UserData from "../src/Container/UserData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from './Container/UserList';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './Container/Store';

function App() {
  return (
    

    <div>
      <Provider store={store}>
      <Router>
      <Routes>
        <Route path="/" element={<UserData />} />
        <Route path="/users" element={<UserList  />} />
      </Routes>
    </Router>
    </Provider>

    </div>
  );
}

export default App;
