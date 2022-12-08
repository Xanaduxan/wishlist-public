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
         <button className="button-friend-new" type="button" onClick={() => navigate('/myfriends')}>Мои друзья</button>
         <button className="button-friend-new" type="button" onClick={() => navigate('/myfriends/find')}>Найти друзей</button>
         <button className="button-friend-new" type="button" onClick={() => navigate('/myfriends/applications')}>Заявки в друзья</button><br />
            </div>
            
            <div className="friend-list">

         {users.map((user) => (
            idFriends.includes(user.id) && (

            <div onClick={()=> navigate(`myfriends/${user.id}`)} className="friend" key={user.id}>
            <img src={user.image} alt="foto" className="fotoFriend img-list" />

            <div><p>{user.login}</p>
            <button type="button" className="button-add" onClick={() => dispatch(deleteFriend(user.id))}>Удалить</button>
            </div>
            </div>
          )
         ))}</div>
         </div>
   );
}

export default SearchMyFriend;
