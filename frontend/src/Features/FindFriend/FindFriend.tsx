import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import FriendCard from '../FriendCard/FriendCard';
import { findAsyncFriends } from './findFriendSlice';

function FindFriend(): JSX.Element {
   const [login, setLogin] = useState('');
   const dispatch = useAppDispatch();
   const { newFriends } = useSelector((state: RootState) => state.findFriends);
   const navigate = useNavigate();
   const users = newFriends.filter((user) => user.login === login && login !== 'one');

   useEffect(() => {
      dispatch(findAsyncFriends());
   }, []);

   return (
      <div>
         <button onClick={() => navigate('/myfriends')} type="button">My friends</button>
         <button type="button" onClick={() => navigate('/myfriends/find')}>Find friends</button>
         <button type="button">Applications</button><br />
         <input value={login} type="text" placeholder="Name Friend" onChange={(e) => setLogin(e.target.value)} />

         {/* {newFriends.map((newFriend) => (
            <div key={newFriend?.id}>
               <img className="fotoFriend" src={newFriend?.image} alt="" />
               <p>{newFriend?.login}</p>
            </div>

         ))} */}
         {users.map((user) => (
            // <div key={user?.id}>
            //    <img className="fotoFriend" src={user?.image} alt="" />
            //    <p>{user?.login}</p>
            // </div>
            // eslint-disable-next-line max-len
            <FriendCard key={user.id} login={user.login} image={user.image} gender={user.gender} id={user.id} name={user.name}/>
         ))}

      </div>
   );
}

export default FindFriend;
