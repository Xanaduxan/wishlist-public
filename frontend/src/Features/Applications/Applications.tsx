import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { upDateReq, deleteAsyncReq } from './ReqSlice';

function Application(): JSX.Element {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const { requests } = useSelector((state: RootState) => state.friendRequest);
console.log(requests);

    return (
      <div>
          <button onClick={() => navigate('/myfriends')} type="button">My friends</button>
         <button type="button" onClick={() => navigate('/myfriends/find')}>Find friends</button>
         <button type="button" onClick={() => navigate('/myfriends/applications')}>Applications</button><br />
         {requests.length === 0 && <div>Applications in friend NET!!!</div>}
         {requests.map((req) => (
            <div key={req?.login}>
            <img className="fotoFriend" src={req?.image} alt="foto" />
            <p>{req?.login}</p>
            <p>{req?.gender}</p>
            <button type="button" onClick={() => dispatch(upDateReq(req.id))}>Add</button>
            <button type="button" onClick={() => dispatch(deleteAsyncReq(req.id))}>Delete</button>

            </div>
         ))}
      </div>
   );
}

export default Application;
