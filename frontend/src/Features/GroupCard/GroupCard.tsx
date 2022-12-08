import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { addUserInGroup, deleteUserInGroup, initAsyncUsersInGroups } from '../GroupsList/groupSlice';
import { User } from '../UserList/types/State';

function GroupCard() {
const [loginUser, setLoginUser] = useState('');
const navigate = useNavigate();
const dispatch = useAppDispatch();
const { groupId } = useParams();
const { login, id } = useSelector((state: RootState) => state.user);
const { friends } = useSelector((state: RootState) => state.friendsList);
const { users } = useSelector((state: RootState) => state.usersList);
const { req } = useSelector((state: RootState) => state.groups);

const findUsers = users.filter((user) => user?.login.includes(loginUser.toLowerCase()) && user?.login !== login.toLowerCase());
console.log(findUsers);

const idReq = req.map((reqId) => reqId.userId);

 useEffect(() => {
    dispatch(initAsyncUsersInGroups(Number(groupId)));
  }, []);

   return (
      <div>
         <input className="input-space" value={loginUser} type="text" placeholder="Name Friend" onChange={(e) => setLoginUser(e.target.value)} />
           {loginUser && findUsers.map((findUser) => (
            <div className="friend" key={findUser.id}>
            <img className="fotoFriend img-list" src={findUser.image} alt="" />
            <p>{findUser.login}</p>
<button type="button" className="button-add" onClick={() => dispatch(addUserInGroup({ idGroup: Number(groupId), userId: findUser.id }))}>Добавить в группу</button>
            </div>
         ))}
         {users.length && users.map((user: User) => (
            idReq.includes(user.id) && (
            <div className="friend" key={user.id}>
            <img src={user.image} alt="foto" className="fotoFriend img-list" />
            <div><p>{user.login}</p>
               <img src="img/delete.png" alt="" className="updateWish" onClick={() => dispatch(deleteUserInGroup({ idGroup: Number(groupId), userId: user.id }))} />
            </div>
            </div>
          )
         ))}
      </div>
   );
}

export default GroupCard;
