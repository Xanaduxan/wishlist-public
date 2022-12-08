import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Registartion from '../Features/Registration/Registration';
import Login from '../Features/Login/Login';

import WishList from '../Features/WishList/WishList';
import GroupsList from '../Features/GroupsList/GroupsList';

import Profile from '../Features/Profile/Profile';
import Main from '../Features/Main/Main';

import Layout from '../Features/Layout/Layout';

import AntiWishList from '../Features/AntiWishList/AntiWishList';

import Modal from '../Features/Modal/Modal';

import * as api from '../Api/api';

import { RootState, useAppDispatch, useAppSelector } from '../store';

import { userInitStateAsync } from '../Features/Registration/userSlice';

// import { initAsyncFriends } from '../Features/FriendsList/friendSlice';
// import { findAsyncFriends } from '../Features/FindFriend/findFriendSlice';
// import { initAsyncReq } from '../Features/Applications/ReqSlice';
// import { initAsyncReqAdd } from '../Features/Applications/AddReqSlice';
import SearchMyFriend from '../Features/SearchMyFriend/SearchMyFriend';
import UserList from '../Features/UserList/UserList';
import { initAsyncUsers } from '../Features/UserList/UserListSlice';
import Applications from '../Features/Applications/Applications';
import { initAsyncRequests } from '../Features/Applications/ApplicationsSlice';
import { initAsyncMyFriends } from '../Features/SearchMyFriend/friendsSlice';

import Application from '../Features/Applications/Applications';

import AntiWishDetail from '../Features/AntiWishList/AntiWishDetail';

import AllWishList from '../Features/AllWishList/AllWishList';
import { initAsyncWishes } from '../Features/WishList/wishSlice';
import { initAsyncAntiWish } from '../Features/AntiWishList/antiWishSlice';
import { userProfileInitAsync } from '../Features/Profile/userProfileSlice';

function App():JSX.Element {
  // const { requests } = useSelector((state: RootState) => state.friendRequest);
  const dispatch = useAppDispatch();

const userState = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(userInitStateAsync());
  });

  useEffect(() => {
      dispatch(initAsyncUsers());
    });

    useEffect(() => {
      dispatch(initAsyncRequests());
    dispatch(userProfileInitAsync(String(userState.id)));
  }, []);

  useEffect(() => {
    dispatch(userInitStateAsync());
}, []);

     useEffect(() => {
      dispatch(initAsyncMyFriends());
   });
   useEffect(() => {
    dispatch(initAsyncWishes());
 }, []);

 useEffect(() => {
  dispatch(initAsyncAntiWish());
  }, []);
  return (

<Routes>
  <Route element={<Layout />}>
      <Route path="/" element={<Main />} />
      <Route path="/mywishes" element={<WishList />} />
      <Route path="/antiwishlist" element={<AntiWishList />} />
      <Route path="/myfriends" element={<SearchMyFriend />} />
      <Route path="/myfriends/find" element={<UserList />} />
      <Route path="/mygroups" element={<GroupsList />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/auth/registration" element={<Registartion />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/wishlist" element={<AllWishList />} />
      <Route path="/myfriends/applications" element={<Application />} />
      <Route path="antiwishes/:antiWishId" element={<AntiWishDetail />} />

  </Route>
</Routes>

  );
}

export default App;
