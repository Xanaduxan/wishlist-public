import { configureStore } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import antiWishSlice from './Features/AntiWishList/antiWishSlice';

import friendFindSlice from './Features/FindFriend/findFriendSlice';
import friendSlice from './Features/FriendsList/friendSlice';
import groupSlice from './Features/GroupsList/groupSlice';

import wishSlice from './Features/WishList/wishSlice';

import userSlice from './Features/Registration/userSlice';
import ReqSlice from './Features/Applications/ReqSlice';
import userProfileSlice from './Features/Profile/userProfileSlice';
import AddReqSlice from './Features/Applications/AddReqSlice';


// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.
const store = configureStore({

   // теперь функция combineReducers не нужна
   reducer: {

      myFriends: friendSlice,
      findFriends: friendFindSlice,
      user: userSlice,
      groups: groupSlice,
      antiwishes: antiWishSlice,
      wishes: wishSlice,
      friendRequest: ReqSlice,
      userProfile: userProfileSlice
      addReq: AddReqSlice,

   },

});
// для правильной типизации будем использовать useAppDispatch вместо
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
