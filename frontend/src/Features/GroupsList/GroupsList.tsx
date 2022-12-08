import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { initAsyncGroups } from './groupSlice';

import './GroupList.css';
import ModalAddGroup from './ModalAddGroup';

function GroupsList(): JSX.Element {
   const { groups } = useSelector((state: RootState) => state.groups);
   console.log(groups);

   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const myGroups = JSON.parse(JSON.stringify(groups));

// гит душит
   useEffect(() => {
      dispatch(initAsyncGroups());
    }, []);

   return (

      <div className="groupList">
         <ModalAddGroup />
      <h1>Вы состоите в группах:</h1>
         {groups.length ? groups.map((group) => (
         <div onClick={() => navigate(`/mygroups/${group.id}`)} className="groupCard">

         <div key={group.id}>
            <div>{group.name}</div>
            <img className="groupimg" src={group.picture} alt="Groopimg" />
            <div>{group.description}</div>
            <button className="button-add shine-button">Выйти из группы</button>
         </div>

         </div>
       )

       )
       : <div><button className="button-add shine-button">Создать свою первую группу</button></div>}

      </div>
   );
}

export default GroupsList;
