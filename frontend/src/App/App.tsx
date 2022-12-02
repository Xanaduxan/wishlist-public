import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from '../Features/Header/Header';
import WishList from '../Features/WishList/WishList';
import FriendsList from '../Features/FriendsList/FriendsList';
import GroupsList from '../Features/GroupsList/GroupsList';

import Profile from '../Features/Profile/Profile';
import Main from '../Features/Main/Main';
import Footer from '../Features/Footer/Footer';

function App():JSX.Element {
  return (
<>
    <Header />
    <Routes>

      <Route path="/profile" element={<Profile />} />

      <Route path="/" element={<Main />}>
      <Route path="/mywishes" element={<WishList />} />
      <Route path="/myfriends" element={<FriendsList />} />
      <Route path="/mygroups" element={<GroupsList />} />
      <Route path="/profile" element={<Profile />} />
      </Route>

    </Routes>
    <Footer />
</>
  );
}

export default App;
