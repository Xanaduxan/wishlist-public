// import { AsyncThunkAction } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import AddAntiWish from './AddAntiWish';
import AllAntiWish from './AllAntiWish';
import AntiWishItem from './AntiWishItem';
import { initAsyncAntiWish } from './antiWishSlice';
import './AntiWishList.css';
import { AntiWish } from './types/state';

function AntiWishList():JSX.Element {
const { antiwishes } = useSelector((state:RootState) => state.antiwishes);
const { id } = useSelector((state:RootState) => state.user);
const dispatch = useAppDispatch();
const myantiwishes = JSON.parse(JSON.stringify(antiwishes));

useEffect(() => {
  dispatch(initAsyncAntiWish());
  }, []);

  return (
<>
  <div className="antiwish-add">
    <h1>Антивишлист</h1>
        {id ? (<AddAntiWish />) : (<div>Зарегистрируйтесь, чтобы посмотреть</div>)}
  </div>
<div className="antiwishlist-container">
      <div className="antilist">

<ul>
    {myantiwishes.filter((anti:AntiWish) => anti.userId === id).map((anti:AntiWish) => (
<li className="li-antiwish" key={anti.id} data-id={anti.userId}>
      <AntiWishItem anti={anti} />
</li>
)
)}
</ul>

      </div>
<div className="antilist">
  <h2>Люди не хотят:</h2>
    <AllAntiWish />
</div>
</div>
</>
  );
}

export default AntiWishList;
