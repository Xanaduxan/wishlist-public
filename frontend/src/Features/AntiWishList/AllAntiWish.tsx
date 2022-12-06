import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function AllAntiWish():JSX.Element {
  const { antiwishes } = useSelector((state:RootState) => state.antiwishes);
  return (
<ul>
  <li className="li-antiwish anti">
    <h2>Люди не хотят:</h2>
  </li>
    {antiwishes.map((anti) => (
<li className="li-antiwish" key={`s${anti.id}`} data-id={anti.userId}>
  <div className="antiwish-cell">
      <img className="img-list" src={anti.image} alt="antiwish" />
      <div className="title-antiwish">{anti.title}</div>

      <div className="description-antiwish">Описание: {anti.description}</div>
  </div>
</li>
)
)}
</ul>
);
}

export default AllAntiWish;
