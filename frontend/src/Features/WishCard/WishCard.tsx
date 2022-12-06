import React, { useState } from 'react'
import { useAppDispatch } from '../../store';
import ModalUpdate from '../ModalUpdate/ModalUpdate';
import { Wish } from '../WishList/types/state';
import { deleteAsyncWish } from '../WishList/wishSlice';

export default function WishCard({id, booking, wish, userId, category, title, shop, description, holiday, image}: Wish): JSX.Element {
    const dispatch = useAppDispatch();
    return (
                  <div  className='wish'>
                     <div>{title}</div>
                     <div>{shop}</div>
                     <div>{description}</div>
                     <div>{holiday}</div>
                     {image ? (<img className="fotoWish" src={image} alt="foto" />) : ( <></>)}
                     <ModalUpdate id={id} booking={booking} wish={wish} userId={userId} category={category} title={title} shop={shop} description={description} holiday={holiday} image={image}/>
                     <button onClick={()=>dispatch(deleteAsyncWish({id}))}>delete</button>
                  </div>
     
  )
}
