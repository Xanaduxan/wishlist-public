// import { AsyncThunkAction } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import AddAntiWish from './AddAntiWish';
import { delAsyncAntiWish, initAsyncAntiWish } from './antiWishSlice';
import EditAntiWish from './EditAntiWish';

function AntiWishList():JSX.Element {
const { antiwishes } = useSelector((state:RootState) => state.antiwishes);
const { id } = useSelector((state:RootState) => state.user);
const dispatch = useAppDispatch();
const [show, setShow] = useState(false);
function editShow():void {
  return setShow((prev) => !prev);
}
console.log(antiwishes);

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
      {anti.title}
{Number(id) === anti.userId && (
<>

          <button type="button" onClick={editShow}>Редактировать</button>
          <button type="button" onClick={(): void => { dispatch(delAsyncAntiWish(anti.id)); }}>Удалить</button>

{show && (<EditAntiWish anti={anti} />)}
</>
)}
</li>
)
)}
</ul>
    </div>
    <AddAntiWish />
</>
  );
}

export default AntiWishList;
