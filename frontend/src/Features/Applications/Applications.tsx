import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { initAsyncReq } from './ReqSlice';

function Application(): JSX.Element {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
    const { requests } = useSelector((state: RootState) => state.friendRequest);

   useEffect(() => {
      dispatch(initAsyncReq());
   }, []);

   return (
      <div>
          <button onClick={() => navigate('/myfriends')} type="button">My friends</button>
         <button type="button" onClick={() => navigate('/myfriends/find')}>Find friends</button>
         <button type="button" onClick={() => navigate('/myfriends/applications')}>Applications</button><br />
         {requests.map((req) => (
            <div key={req.login}>
            <img className="fotoFriend" src={req.image} alt="foto" />
            <p>{req.login}</p>
            <p>{req.gender}</p>
            <button type="button">Add</button>
            <button type="button">Delete</button>

            </div>
         ))}
      </div>
   );
}

export default Application;
