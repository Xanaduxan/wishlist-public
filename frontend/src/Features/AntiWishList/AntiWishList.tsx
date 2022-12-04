import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function AntiWishList():JSX.Element {
const { antiwishes } = useSelector((state:RootState) => state.antiWishes);

  return (
<ul>
    {antiwishes.map((anti) => <li>{anti.title}</li>)}
</ul>
  );
}

export default AntiWishList;
