import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { agreeRequest, deleteRequest } from './ApplicationsSlice';
import './Application.css';

function Applications(): JSX.Element {
const navigate = useNavigate();
const dispatch = useAppDispatch();
const { friends } = useSelector((state: RootState) => state.friendsList);
const { requests } = useSelector((state: RootState) => state.requestsList);
const { users } = useSelector((state: RootState) => state.usersList);
const { id } = useSelector((state: RootState) => state.user);

const reqIds = requests.filter((req) => req.friendId === id && req.status === false);
const copy: number[] = reqIds.map((el) => el.userId);
console.log(requests);

   return (
         <div>
            <div className="button-friend-list">
         <button className="button-friend" type="button" onClick={() => navigate('/myfriends')}>My friends</button>
         <button className="button-friend" type="button" onClick={() => navigate('/myfriends/find')}>Find friends</button>
         <button className="button-friend" type="button" onClick={() => navigate('/myfriends/applications')}>Applications</button><br />
            </div>
           {users.map((user) => (
                  copy.includes(user.id) && (
                  <div key={user.id}>
                  <img src={user.image} alt="foto" className="fotoFriend" />
                  <p>{user.login}</p>
                  <button type="button" onClick={() => dispatch(agreeRequest(user.id))}>Agree</button>
                  <button type="button" onClick={() => dispatch(deleteRequest(user.id))}>Delete</button>
                  </div>
                )
            ))}
         </div>
   );
}

export default Applications;
