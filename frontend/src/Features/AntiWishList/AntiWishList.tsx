// import { AsyncThunkAction } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import AddAntiWish from './AddAntiWish';
import AntiWishItem from './AntiWishItem';
import { initAsyncAntiWish } from './antiWishSlice';


function AntiWishList():JSX.Element {
const { antiwishes } = useSelector((state:RootState) => state.antiwishes);
const { id } = useSelector((state:RootState) => state.user);
const dispatch = useAppDispatch();


useEffect(() => {
  dispatch(initAsyncAntiWish());
  }, []);

  return (
<>

    <div>
      <h1>Ниже все антилисты</h1>
<ul>
    {antiwishes.map((anti) => (
<li key={anti.id} data-id={anti.userId}>
      <AntiWishItem anti={anti} />
</li>
)
)}
</ul>
    </div>
    {id ? (<AddAntiWish />) : (<div>Зарегистрируйтесь, чтобы посмотреть</div>)}
</>
  );
}

export default AntiWishList;
