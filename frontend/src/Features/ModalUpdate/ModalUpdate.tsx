import React, { useEffect, useState } from 'react';

import { RootState, useAppDispatch } from '../../store';
import { Wish } from '../WishList/types/state';
import { addAsyncWish, updateAsyncWish } from '../WishList/wishSlice';

export default function ModalUpdate({id,booking, wish, userId, category, title, shop, description, holiday, image} : Wish): JSX.Element {
    const [modalActive, setModalActive] = useState(false);
    const [titles, setTitle] = useState(title);
    const [images, setImage] = useState(image);
    const [shops, setShop] = useState(shop);
    const [descriptions, setDescription] = useState(description);
    const [holidays, setHoliday] = useState(holiday);
    const [categorys, setCategory] = useState(category);
    const dispatch = useAppDispatch();
    const useModal = () => {
        dispatch(updateAsyncWish({title: titles, image: images, shop: shops, description: descriptions, holiday: holidays, category: categorys, id}))
        setModalActive(false)
    }
    return (
        <>
            <button className='updateWish open-btn' onClick={() => setModalActive(true)}>update</button>
            <div className={modalActive ? 'modal active' : 'modal'} onClick={()=>setModalActive(false)}>
                <div className={modalActive ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>

                    <p>Измените необходимые данные</p>
    <input id="input" 
    type="text" 
    placeholder='title обязательное поле' 
    value={titles} 
    onChange={(e) => setTitle(e.target.value)}/>
    <input id="input" 
    type="text" 
    placeholder='image'
    value={images} 
    onChange={(e) => setImage(e.target.value)}/>
    <input id="input" 
    type="text" 
    placeholder='shop'
    value={shops} 
    onChange={(e) => setShop(e.target.value)}/>
    <input id="input" 
    type="text" 
    placeholder='description'
    value={descriptions} 
    onChange={(e) => setDescription(e.target.value)}/>
    <input id="input" 
    type="text" 
    placeholder='holiday'
    value={holidays} 
    onChange={(e) => setHoliday(e.target.value)}/>
    <select value={category} id="select" onChange={(e) => setCategory(e.target.value)}>
        <option value="для себя">для себя</option>
        <option value="малому">малому</option>
    </select>
    <button onClick={useModal}>Изменить</button>
                </div>
            </div>
        </>
    )
}