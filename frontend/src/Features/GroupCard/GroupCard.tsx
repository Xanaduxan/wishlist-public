import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { addUserInGroup } from '../GroupsList/groupSlice';

function GroupCard() {
const [loginUser, setLoginUser] = useState('');
const navigate = useNavigate();
const dispatch = useAppDispatch();
const { login, id } = useSelector((state: RootState) => state.user);
const { friends } = useSelector((state: RootState) => state.friendsList);
const { users } = useSelector((state: RootState) => state.usersList);

const {requests} = useSelector((state: RootState) => state.requestsList)
const findUsers = users.filter((user) => user?.login.includes(loginUser.toLowerCase()) && user?.login !== login.toLowerCase());

// const idFriends = friends.map((idFriend) => {
// if (idFriend.userId === id) {
//    return idFriend.friendId;
// }
//    return idFriend.userId;
// });
// const myReqs = requests.filter((req) => req.friendId === id || req.userId === id);

// const array = myReqs.map((el) => el.userId !== id ? el.userId : el.friendId);



   return (
      <div>
         <input className="input-space" value={loginUser} type="text" placeholder="Name Friend" onChange={(e) => setLoginUser(e.target.value)} />
           {loginUser && findUsers.map((findUser) => (
            <div className="friend" key={findUser.id}>
            <img className="fotoFriend img-list" src={findUser.image} alt="" />
            <p>{findUser.login}</p>
         {/* {!array.includes(findUser.id) &&
         <button type="button" className="button-add" onClick={()=> dispatch(addUserInGroup(findUser.id))}>Добавить в группу</button>} */}
         {/* {idFriends.includes(findUser.id) && <button type="button">Delete</button>} */}
<button type="button" className="button-add" onClick={()=> dispatch(addUserInGroup(findUser.id))}>Добавить в группу</button>
            </div>
         ))}
      </div>
   );
}

export default GroupCard;
