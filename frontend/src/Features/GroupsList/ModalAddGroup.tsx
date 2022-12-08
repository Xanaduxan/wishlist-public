import React, { useState } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncWish } from '../WishList/wishSlice';
import { addAsyncGroups } from './groupSlice';
import { useSelector } from 'react-redux';

export default function ModalAddGroup(): JSX.Element {
    const { id } = useSelector((state:RootState) => state.user);
    const [modalActive, setModalActive] = useState(false);
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useAppDispatch();
    const useModal1 = () => {
        dispatch(addAsyncGroups({ name, picture, description, adminId: id}));
        setModalActive(false);
        setName('');
        setPicture('');
        setDescription('');
    };

    return (
        <>
            <button className="addWish shine-button" onClick={() => setModalActive(true)}>Создать группу</button>
            <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
                <div className={modalActive ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
    <input
      id="input"
      className="modal-class"
      type="text"
      placeholder="title обязательное поле"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <input
      id="input"
      className="modal-class"
      type="text"
      placeholder="image"
      value={picture}
      onChange={(e) => setPicture(e.target.value)}
    />
    <input
      id="input"
      className="modal-class"
      type="text"
      placeholder="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
   
    <button onClick={useModal1}>Создать</button>
                </div>
            </div>
        </>
    );
}
