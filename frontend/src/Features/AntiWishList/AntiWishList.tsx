// import { AsyncThunkAction } from '@reduxjs/toolkit';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import AddAntiWish from './AddAntiWish';
import AllAntiWish from './AllAntiWish';
import AntiWishItem from './AntiWishItem';
import { initAsyncAntiWish } from './antiWishSlice';
import './AntiWishList.css';
import { AntiWish } from './types/state';
import { Typography } from '@mui/material';

function AntiWishList():JSX.Element {
const { antiwishes } = useSelector((state:RootState) => state.antiwishes);
const { id } = useSelector((state:RootState) => state.user);

  return (
<>
  <div className="antiwish-add">
    <h1>Антивишлист</h1>
        {id ? (<AddAntiWish />) : (<div>Зарегистрируйтесь, чтобы посмотреть</div>)}
  </div>
<div className="antiwishlist-container">
      <div className="antilist">
      {id > 0 && (
<Typography variant="h4" gutterBottom>
        Я не хочу получить в подарок:
</Typography>
)}
{id > 0 && (
<ul>
    {antiwishes.filter((anti:AntiWish) => anti.userId === id).map((anti:AntiWish) => (
<li className="li-antiwish" key={anti.id} data-id={anti.userId}>
      <AntiWishItem anti={anti} />
</li>
)
)}
</ul>
)}
      </div>
<div className="antilist">

    <AllAntiWish />
</div>
</div>
</>
  );
}

export default AntiWishList;
