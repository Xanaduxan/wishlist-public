import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { initAsyncAntiWish } from './antiWishSlice';

function AntiWishList():JSX.Element {
const { antiwishes } = useSelector((state:RootState) => state.antiwishes);
const dispatch = useAppDispatch();
useEffect(() => {
  dispatch(initAsyncAntiWish());
  }, []);
  return (
    <div>Ниже все антилисты
<ul>
    {antiwishes.map((anti) => <li key={anti.id}>{anti.title}</li>)}
</ul>
    </div>
  );
}

export default AntiWishList;
