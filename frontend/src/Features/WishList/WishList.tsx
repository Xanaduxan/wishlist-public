import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../store';
import Modal from '../Modal/Modal';
import WishCard from '../WishCard/WishCard';
import { initAsyncWishes } from './wishSlice';

function WishList(): JSX.Element {
   const { wishes } = useSelector((state: RootState) => state.wishes);
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(initAsyncWishes())
   }, [])
   return (
      <div className='main'>
         <Modal />

         <div> для себя
            {wishes.map((wish) => {
               if (wish.category === 'для себя') {
                  return (
                     <WishCard key={wish.id} id={wish.id} booking={wish.booking} wish={wish.wish} userId={wish.userId} category={wish.category} title={wish.title} shop={wish.shop} description={wish.description} holiday={wish.holiday} image={wish.image} />
                  )
               }
            })}
         </div>
         <div> малому
            {wishes.map((wish) => {
               if (wish.category === 'малому') {
                  return (
                     <WishCard key={wish.id} id={wish.id} booking={wish.booking} wish={wish.wish} userId={wish.userId} category={wish.category} title={wish.title} shop={wish.shop} description={wish.description} holiday={wish.holiday} image={wish.image} />
                  )
               }
            })}
         </div>
      </div>
   )
}

export default WishList