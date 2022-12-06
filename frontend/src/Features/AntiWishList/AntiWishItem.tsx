import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { delAsyncAntiWish } from './antiWishSlice';
import EditAntiWish from './EditAntiWish';
import { AntiWish } from './types/state';

function AntiWishItem({ anti } : { anti: AntiWish }):JSX.Element {
  const { id } = useSelector((state:RootState) => state.user);
const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
function editShow():void {
  return setShow((prev) => !prev);
}
  return (
<div>
    {anti.title}
{Number(id) === anti.userId && (
<>

          <button type="button" onClick={editShow}>Редактировать</button>
          <button type="button" onClick={(): void => { dispatch(delAsyncAntiWish(anti.id)); }}>Удалить</button>

{show && (<EditAntiWish anti={anti} editShow={editShow}/>)}
</>
)}
</div>
 );
}

export default AntiWishItem;

