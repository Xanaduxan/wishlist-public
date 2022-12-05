import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { initAsyncGroups } from './groupSlice';

function GroupsList(): JSX.Element {
   const { groups } = useSelector((state: RootState) => state.groups);
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   function initShow(): void {
      dispatch(initAsyncGroups());
   }

   return (
      <>
      <div>Вы состоите в группах:</div>
      {groups.map((group) => {
         <div key={group.id}>
            
         </div>
      })}
      </>
   )
}

export default GroupsList