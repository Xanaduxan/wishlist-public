import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { FriendUser } from '../FriendsList/types/State';
import { initAsyncReq, postAsyncReq } from '../Applications/ReqSlice';
import { useSelector } from 'react-redux';

function FriendCard({ login, image, gender, id }: FriendUser): JSX.Element {
   const dispatch = useAppDispatch();
   // const {requests} = useSelector((state: RootState) => state.friendRequest)
   // console.log(requests);
   
   // useEffect(()=> {
   //    dispatch(initAsyncReq())
   // },[requests])
   return (
      <div>

         <img className="fotoFriend" src={image} alt="" />
         <p>{login}</p>
         <p>{gender}</p>
         <button type="button" onClick={() => dispatch(postAsyncReq(id))}>Add in Friends</button>

      </div>
   );
}

export default FriendCard;
