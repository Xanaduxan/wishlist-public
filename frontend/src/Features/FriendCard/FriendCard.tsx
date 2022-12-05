import React from 'react';
import { useAppDispatch } from '../../store';
import { FriendUser } from '../FriendsList/types/State';
import { findAsyncFriends } from './ReqSlice';

function FriendCard({ login, image, gender, id }: FriendUser): JSX.Element {
   const dispatch = useAppDispatch();
  
   return (
      <div>

               <img className="fotoFriend" src={image} alt="" />
               <p>{login}</p>
               <p>{gender}</p>
               <button type="button" onClick={() => dispatch(findAsyncFriends(id))}>Add in Friends</button>

      </div>
   );
}

export default FriendCard;
