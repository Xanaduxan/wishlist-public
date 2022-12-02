import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from '../Features/Header/Header';
import WishList from '../Features/WishList/WishList';
import FriendsList from '../Features/FriendsList/FriendsList';
import GroupsList from '../Features/GroupsList/GroupsList';
import Layout from '../Features/Layout/Layout';

import Profile from '../Features/Profile/Profile';

function App():JSX.Element {
  return (
<>
    <Header />
    <Routes>

      <Route path="/profile" element={<Profile />} />

      <Route path="/" element={<Layout />}>
      <Route path="/mywishes" element={<WishList />} />
      <Route path="/myfriends" element={<FriendsList />} />
      <Route path="/mygroups" element={<GroupsList />} />
      <Route path="/profile" element={<Profile />} />
      </Route>

    </Routes>
</>
  );
}

export default App;
