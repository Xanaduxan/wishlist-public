import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Registartion from '../Features/Registration/Registration';

function App():JSX.Element {
  return (
    <Routes>
      <Route path="auth/registration" element={<Registartion />} />
    </Routes>
  );
}

export default App;
