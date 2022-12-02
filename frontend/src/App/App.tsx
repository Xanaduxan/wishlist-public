import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Profile from '../Features/Profile/Profile';

function App():JSX.Element {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
