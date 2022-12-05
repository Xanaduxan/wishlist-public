import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { initAsyncFriends, findAsyncFriends } from './friendSlice';

function FriendsList(): JSX.Element {
   const [login, setLogin] = useState('');
    const { myfriendsAll} = useSelector((state: RootState) => state.myFriends);
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const FindMyFriend = myfriendsAll.filter((myFriend) => myFriend.login === login);
   
   // function initShow(): void {
   //    dispatch(initAsyncFriends());
   //  }

    useEffect(() => {
      dispatch(initAsyncFriends())
    }, [])

   return (
      <div>
         <button type="button">My friends</button>
         <button type="button" onClick={() => navigate('/myfriends/find')}>Find friends</button>
         <button type="button">Applications</button><br />
         <input value={login} type="text" placeholder="Name Friend" onChange={(e) => setLogin(e.target.value)} />
         <button type="button" onClick={() => dispatch(findAsyncFriends(login))}>Search</button>
         <div className="friendDiv">
         {/* {myfriendsAll.map((friend) => (
            <div key={friend.id}>
            <img className="fotoFriend" src={friend.image} alt="foto" />
            <div>{friend.login}</div>
            <div>{friend.gender}</div>
            </div>
         ))} */}
          {FindMyFriend.map((friend) => (
            <div key={friend.id}>
            <img className="fotoFriend" src={friend.image} alt="foto" />
            <div>{friend.login}</div>
            <div>{friend.gender}</div>
            </div>
         ))}
         {/* {myFriend.length < 1 && 
         <div>Не найдено</div>} */}

         </div>
      </div>
   );
}

export default FriendsList;
