import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Registartion from '../Features/Registration/Registration';
import Login from '../Features/Login/Login';

import WishList from '../Features/WishList/WishList';
import FriendsList from '../Features/FriendsList/FriendsList';
import GroupsList from '../Features/GroupsList/GroupsList';

import Profile from '../Features/Profile/Profile';
import Main from '../Features/Main/Main';

import Layout from '../Features/Layout/Layout';

import FindFriend from '../Features/FindFriend/FindFriend';

import AntiWishList from '../Features/AntiWishList/AntiWishList';
import Modal from '../Features/Modal/Modal';

function App():JSX.Element {
  return (

<Routes>
  <Route element={<Layout />}>
      <Route path="/" element={<Main />} />
      <Route path="/mywishes" element={<WishList />} />
      <Route path="/antiwishlist" element={<AntiWishList />} />
      <Route path="/myfriends" element={<FriendsList />} />
      <Route path="/myfriends/find" element={<FindFriend />} />
      <Route path="/mygroups" element={<GroupsList />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="auth/registration" element={<Registartion />} />
      <Route path="auth/login" element={<Login />} />
  </Route>
</Routes>

  );
}

export default App;
