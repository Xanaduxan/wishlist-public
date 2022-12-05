import userEvent from '@testing-library/user-event';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import AddAntiWish from './AddAntiWish';
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
    <div>Ниже все антилисты
<ul>
    {antiwishes.map((anti) => (
<li key={anti.id} data-id={anti.userId}>
      {anti.title}
{Number(id) === anti.userId && (
<>
<button type="button">Редактировать</button>
<button type="button">Удалить</button>
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
