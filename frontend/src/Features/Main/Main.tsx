import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import { Wish } from '../WishList/types/state';
import '../Main/Main.css';

export default function Main():JSX.Element {
  const { wishes } = useSelector((state:RootState) => state.wishes);
  const { antiwishes } = useSelector((state:RootState) => state.antiwishes);

  function arrayRandElement(wishes: Wish[]) {
    const array = [];
    for (let i = 5; i > 0; i--) {
      const rand = Math.floor(Math.random() * wishes.length);
      array.push(wishes[rand]);
      wishes.slice(rand, 1);
    }
    return array;
}

  return (
   <div>
      прто
   </div>
  );
}
