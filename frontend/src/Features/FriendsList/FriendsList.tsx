import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import FriendCard from '../FriendCard/FriendCard';
import { initAsyncFriends } from './friendSlice';

function FriendsList(): JSX.Element {
   const [login, setLogin] = useState('');
    const { myfriendsAll } = useSelector((state: RootState) => state.myFriends);
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const FindMyFriend = myfriendsAll.filter((myFriend) => myFriend.login === login);

   useEffect(() => {
      dispatch(initAsyncFriends());
    }, []);

   return (
      <div>
         <button type="button">My friends</button>
         <button type="button" onClick={() => navigate('/myfriends/find')}>Find friends</button>
         <button type="button" onClick={()=> navigate('/myfriends/applications')}>Applications</button><br />
         <input value={login} type="text" placeholder="Name Friend" onChange={(e) => setLogin(e.target.value)} />
         <div className="friendDiv">
         {/* {myfriendsAll.map((friend) => (
            <div key={friend.id}>
            <img className="fotoFriend" src={friend.image} alt="foto" />
            <div>{friend.login}</div>
            <div>{friend.gender}</div>
            </div>
         ))} */}
          {FindMyFriend.map((friend) => (
            // <div key={friend.id}>
            // <img className="fotoFriend" src={friend.image} alt="foto" />
            // <div>{friend.login}</div>
            // <div>{friend.gender}</div>
            // </div>
            // eslint-disable-next-line max-len
            <FriendCard key={friend.id} login={friend.login} image={friend.image} gender={friend.gender} id={friend.id} name={friend.name} birthday={friend.birthday} />
         ))}
         {/* {myFriend.length < 1 &&
         <div>Не найдено</div>} */}

         </div>
      </div>
   );
}

export default FriendsList;
