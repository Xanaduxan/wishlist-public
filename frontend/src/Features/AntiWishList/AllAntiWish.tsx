import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function AllAntiWish():JSX.Element {
  const { antiwishes } = useSelector((state:RootState) => state.antiwishes);
  return (
<ul>
    {antiwishes.map((anti) => (
<li className="li-antiwish" key={`s${anti.id}`} data-id={anti.userId}>
  <div className="antiwish-cell">
      {anti.title}
      <img className="img-list" src={anti.image} alt="antiwish" />
      <div>Описание: {anti.description}</div>
  </div>
</li>
)
)}
</ul>
);
}

export default AllAntiWish;
