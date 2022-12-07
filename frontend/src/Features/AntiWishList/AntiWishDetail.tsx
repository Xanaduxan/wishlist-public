import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store';
import './AntiWishList.css';

function AntiWishDetail():JSX.Element {
  const { antiWishId } = useParams();
  const { antiwishes } = useSelector((state:RootState) => state.antiwishes);
  const anti = antiwishes.find((el) => el.id === Number(antiWishId));

  return (
    <div className="container-antiwish">
    <div className="antiwish-cell-big">
      <img className="img-list" src={anti?.image} alt="antiwish" />
      <div className="title-antiwish">{anti?.title}</div>

      <div className="description-antiwish">Описание: {anti?.description}</div>
    </div>
    </div>
  );
}

export default AntiWishDetail;
