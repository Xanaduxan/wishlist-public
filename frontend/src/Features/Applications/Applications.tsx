/* eslint-disable no-multi-assign */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
// import { User } from '../UserList/types/State';
import { agreeRequest, deleteRequest } from './ApplicationsSlice';
import './Application.css';

function Applications(): JSX.Element {
const navigate = useNavigate();
const dispatch = useAppDispatch();
const { requests } = useSelector((state: RootState) => state.requestsList);
const { users } = useSelector((state: RootState) => state.usersList);
const { id } = useSelector((state: RootState) => state.user);

const reqIds = requests.filter((req) => req.friendId === id && req.status === false);
const copy: number[] = reqIds.map((el) => el.userId);


const arr = [...users];
const copyReverse = arr.reverse().splice(1, 10);

   return (
         <div className="applications">

            <div className="button-friend-list">
         <button className="button-friend-new" type="button" onClick={() => navigate('/myfriends')}>Мои друзья</button>
         <button className="button-friend-new" type="button" onClick={() => navigate('/myfriends/find')}>Найти друзей</button>
         <button className="button-friend-new" type="button" onClick={() => navigate('/myfriends/applications')}>Заявки в друзья</button><br />
                  {!!reqIds.length &&
          <div>{reqIds.length}</div>}
            </div>
            <div className="friend-list">
           {users.map((user) => (

                  copy.includes(user.id) && (
                  <div className="friend-applic" key={user.id} >
                  <img src={user.image} alt="foto" className="fotoFriend" />
                  <p>{user.login}</p>
                  <button type="button" onClick={() => dispatch(agreeRequest(user.id))}>Agree</button>
                  <button type="button" onClick={() => dispatch(deleteRequest(user.id))}>Delete</button>
                  </div>
                )
                
                ))}
                </div>

{!reqIds.length && <div>Заявок нет</div>}
<div>Последние 10 пользователей</div>
{!reqIds.length && copyReverse.map((user) => (
   <div key={user?.id}>
      <img src={user?.image} alt="foto" className="fotoFriend" />
      <p>{user?.login}</p>
   </div>
))}
         </div>
   );
}

export default Applications;
