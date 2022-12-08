import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { delAsyncAntiWish } from './antiWishSlice';
import ModalUpdateAntiWishList from './ModalUpdateAntiWishList';
import { AntiWish } from './types/state';

function AntiWishItem({ anti } : { anti: AntiWish }):JSX.Element {
  const { id } = useSelector((state:RootState) => state.user);
const dispatch = useAppDispatch();
const [modalActive, setModalActive] = useState(false);
    const useModal = () => {
        setModalActive(false);
    };
  return (
<>
    <div>{anti.title}</div>
    <img className="my-img" src={anti.image} alt="антижелание" onClick={() => setModalActive(true)} />
    <div>{anti.description}</div>
{Number(id) === anti.userId && (
<>
<ModalUpdateAntiWishList anti={anti} />
          <img className="updateWish" src="img/delete.png" alt="" onClick={(): void => { dispatch(delAsyncAntiWish(anti.id)); }} />

          <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
                <div className={modalActive ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
                   <div><img className="my-img" style={{ width: '300px', height: '150px' }} src={anti.image} alt="антижелание" /></div>
                   <div>{anti.title}</div>
                   <div>{anti.description}</div>
    <button type="button" onClick={useModal}>Выйти</button>
                </div>
          </div>
</>
)}
</>
 );
}

export default AntiWishItem;
