import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { deleteFriend } from './friendsSlice';

function SearchMyFriend(): JSX.Element {
const [loginFriend, setLoginFriend] = useState('');
const dispatch = useAppDispatch();
const navigate = useNavigate();
const { friends } = useSelector((state: RootState) => state.friendsList);
console.log(friends);

const { id } = useSelector((state: RootState) => state.user);
const { users } = useSelector((state: RootState) => state.usersList);
const idFriends = friends.map((idFriend) => {
if (idFriend.userId === id) {
   return idFriend.friendId;
}
   return idFriend.userId;
});

   return (
         <div>
            <div className="button-friend-list">
         <button className="button-friend" type="button" onClick={() => navigate('/myfriends')}>My friends</button>
         <button className="button-friend" type="button" onClick={() => navigate('/myfriends/find')}>Find friends</button>
         <button className="button-friend" type="button" onClick={() => navigate('/myfriends/applications')}>Applications</button><br />
            </div>
         <input value={loginFriend} type="text" placeholder="Name Friend" onChange={(e) => setLoginFriend(e.target.value)} />
         {users.map((user) => (
            idFriends.includes(user.id) && (
            <div key={user.id}>
            <img src={user.image} alt="foto" className="fotoFriend" />
            <p>{user.login}</p>
            <button type="button" onClick={() => dispatch(deleteFriend(user.id))}>delete friend</button>
            </div>
          )
         ))}
         </div>
   );
}

export default SearchMyFriend;
