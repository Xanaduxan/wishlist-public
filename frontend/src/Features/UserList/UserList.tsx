import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { sendRequest } from '../Applications/ApplicationsSlice';
import { deleteFriend } from '../SearchMyFriend/friendsSlice';

function UserList(): JSX.Element {
const [loginUser, setLoginUser] = useState('');
const navigate = useNavigate();
const dispatch = useAppDispatch();
const { login, id } = useSelector((state: RootState) => state.user);
const { friends } = useSelector((state: RootState) => state.friendsList);
const { users } = useSelector((state: RootState) => state.usersList);
const {requests} = useSelector((state: RootState) => state.requestsList)
const findUsers = users.filter((user) => user?.login.includes(loginUser) && user?.login !== login);
const idFriends = friends.map((idFriend) => {
if (idFriend.userId === id) {
   return idFriend.friendId;
}
   return idFriend.userId;
});
const myReqs = requests.filter((req) => req.friendId === id || req.userId === id)

const array = myReqs.map((el) => el.userId !== id ? el.userId : el.friendId)
console.log(array);

console.log(idFriends);
// console.log(requests);



   return (
         <div>
            <div className="button-friend-list">
         <button className="button-friend" type="button" onClick={() => navigate('/myfriends')}>Мои друзья</button>
         <button className="button-friend" type="button" onClick={() => navigate('/myfriends/find')}>Найти друзей</button>
         <button className="button-friend" type="button" onClick={() => navigate('/myfriends/applications')}>Заявки в друзья</button><br />
            </div>
         <input value={loginUser} type="text" placeholder="Name Friend" onChange={(e) => setLoginUser(e.target.value)} />

         {findUsers.map((findUser) => (
            <div key={findUser.id}>
            <img className="fotoFriend" src={findUser.image} alt="" />
            <p>{findUser.login}</p>
         {!array.includes(findUser.id) &&
         <button type="button" onClick={() => dispatch(sendRequest(findUser.id))}>Add in Friend</button>}
         {idFriends.includes(findUser.id) && <button type="button" onClick={() => dispatch(deleteFriend(findUser.id))}>Delete</button>
         }
            </div>
         ))}
         </div>
   );
}

export default UserList;
