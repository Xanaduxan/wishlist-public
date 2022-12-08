import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Wish } from '../WishList/types/state';

function AllWishList():JSX.Element {
  const { wishes } = useSelector((state: RootState) => state.wishes);
const [list, setList] = useState('all');
function change(e: React.ChangeEvent<HTMLSelectElement>):void {
  setList(e.target.value);
}
  return (
<><select onChange={change}>
  <option value="all" defaultValue="all">Все</option>
  <option value="new year">Новый год</option>
  </select>

    {list === 'all' && (wishes.map((wish:Wish) => <div key={wish.id}>{wish.title}</div>))}
     {list === 'new year' && (wishes.filter((wish:Wish) => wish.holiday?.toLowerCase() === 'Новый год'.toLowerCase()).map((wish:Wish) => <div key={wish.id}>{wish.title}</div>))}

</>
  );
}

export default AllWishList;
