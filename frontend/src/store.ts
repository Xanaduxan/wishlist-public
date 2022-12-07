import { configureStore } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import antiWishSlice from './Features/AntiWishList/antiWishSlice';

import groupSlice from './Features/GroupsList/groupSlice';

import wishSlice from './Features/WishList/wishSlice';

import userSlice from './Features/Registration/userSlice';
import friendsSlice from './Features/SearchMyFriend/friendsSlice';
import UserListSlice from './Features/UserList/UserListSlice';
import RequestsSlice from './Features/Applications/ApplicationsSlice'

// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.
const store = configureStore({

   // теперь функция combineReducers не нужна
   reducer: {
      user: userSlice,
      groups: groupSlice,
      antiwishes: antiWishSlice,
      wishes: wishSlice,
      friendsList: friendsSlice,
      usersList: UserListSlice,
      requestsList: RequestsSlice,

   },

});
// для правильной типизации будем использовать useAppDispatch вместо
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
