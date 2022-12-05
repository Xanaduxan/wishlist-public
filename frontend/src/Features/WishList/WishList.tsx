import { ClassNames } from '@emotion/react';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../store';
import { initAsyncWishes } from './wishSlice';

function WishList(): JSX.Element {
   const { wishes } = useSelector((state: RootState) => state.wishes);
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(initAsyncWishes())
   }, [])
   return (
      
      <div className='main'>
      <div> для себя
         {wishes.map((wish) => {
            if (wish.category === 'для себя') {
               return (
                  <div key={wish.id} className='wish'>
                     <div>{wish.title}</div>
                     <div>{wish.shop}</div>
                     <div>{wish.description}</div>
                     <div>{wish.holiday}</div>
                     <img className="fotoWish" src={wish.image} alt="foto" />
                  </div>
               )
            }
         })}
      </div>
      <div> малому
      {wishes.map((wish) => {
         if (wish.category === 'малому') {
            return (
               <div key={wish.id} className='wish'>
                  <div>{wish.title}</div>
                  <div>{wish.shop}</div>
                  <div>{wish.description}</div>
                  <div>{wish.holiday}</div>
                  <img className="fotoWish" src={wish.image} alt="foto" />
               </div>
            )
         }
      })}
   </div>
   </div>
   
   )
}

export default WishList