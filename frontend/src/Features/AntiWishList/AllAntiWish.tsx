import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../store';

function AllAntiWish():JSX.Element {
  const { antiwishes } = useSelector((state:RootState) => state.antiwishes);
  const navigate = useNavigate();


  return (
<ul>
  <li className="li-antiwish anti">
    <h2>Люди не хотят:</h2>
  </li>
    {antiwishes.map((anti) => (

<li className="li-antiwish" key={`s${anti.id}`} data-id={anti.userId}>
  <button type="button" onClick={() => navigate(`/antiwishes/${anti.id}`)}>
  <div className="antiwish-cell">
      <div className="antiwish-block"><img className="img-list" src={anti.image} alt="antiwish" />
      <div className="title-antiwish">{anti.title}</div>
      </div>
      <div className="description-antiwish">Описание: {anti?.description}</div>

  </div>
  </button>
</li>

)
)}
</ul>
);
}

export default AllAntiWish;
