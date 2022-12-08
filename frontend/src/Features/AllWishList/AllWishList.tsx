import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Wish } from '../WishList/types/state';

function AllWishList():JSX.Element {
  const { wishes } = useSelector((state: RootState) => state.wishes);

  console.log(wishes);
  return (
<>
    {wishes.map((wish:Wish) => <div key={wish.id}>{wish.title}</div>)}
</>
  );
}

export default AllWishList;
