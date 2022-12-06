import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { deleteFriend } from './friendSlice';

function FriendsList(): JSX.Element {
   const [login, setLogin] = useState('');
    const { myfriendsAll } = useSelector((state: RootState) => state.myFriends);
     const { requestsAdd } = useSelector((state: RootState) => state.addReq);
   const navigate = useNavigate();
   const dispatch = useAppDispatch();

   const FindMyFriend = myfriendsAll.filter((myFriend) => myFriend?.login.includes(login));
   return (
      <div>
         <button type="button">My friends</button>
         <button type="button" onClick={() => navigate('/myfriends/find')}>Find friends</button>
         <button type="button" onClick={() => navigate('/myfriends/applications')}>Applications</button><br />
         <input value={login} type="text" placeholder="Name Friend" onChange={(e) => setLogin(e.target.value)} />
         <div className="friendDiv">

          {FindMyFriend.map((friend) => (
            <div key={friend.id}>
            <img className="fotoFriend" src={friend.image} alt="fotoFriend" />
            <p>{friend.login}</p>
            <p>{friend.gender}</p>
            <button onClick={() => dispatch(deleteFriend(friend.id))} type="button">Delete</button>
            </div>
         ))}
           {requestsAdd.map((friend) => (
            <div key={friend.id}>
            <img className="fotoFriend" src={friend.image} alt="fotoFriend" />
            <p>{friend.login}</p>
            <p>{friend.gender}</p>
            <button onClick={() => dispatch(deleteFriend(friend.id))} type="button">Delete</button>
            </div>
         ))}

         </div>
      </div>
   );
}

export default FriendsList;
