import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { initAsyncFriends } from './friendSlice';

function FriendsList(): JSX.Element {
   const { friends } = useSelector((state: RootState) => state.friends);
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   function initShow(): void {
      dispatch(initAsyncFriends());
    }

   return (
      <div>
         <button onClick={() => initShow()} type="button">My friends</button>
         <button type="button" onClick={() => navigate('/myfriends/find')}>Find friends</button>
         <button type="button">Applications</button>
         <div className="friendDiv">
         {friends.map((friend) => (
            <div key={friend.id}>
            <img className="fotoFriend" src={friend.image} alt="foto" />
            <div>{friend.name}</div>
            <div>{friend.gender}</div>
            </div>
         ))}
         </div>

      </div>
   );
}

export default FriendsList;
