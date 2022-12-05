import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import friendFindSlice from './Features/FindFriend/findFriendSlice';
import friendSlice from './Features/FriendsList/friendSlice';
import groupSlice from './Features/GroupsList/groupSlice';
import wishSlice from './Features/WishList/wishSlice';
// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.
const store = configureStore({
// теперь функция combineReducers не нужна
reducer: {
friends: friendSlice,
findFriends: friendFindSlice,
groups: groupSlice,
wishes: wishSlice,
},
});
// для правильной типизации будем использовать useAppDispatch вместо
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
