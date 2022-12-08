import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import Modal from '../Modal/Modal';
import WishCard from '../WishCard/WishCard';
import { initAsyncWishes } from './wishSlice';

function WishList(): JSX.Element {
   const { wishes } = useSelector((state: RootState) => state.wishes);
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(initAsyncWishes());
   }, []);
   return (
      <div className="main">
         <Modal />
         <div> Работа
            {wishes.map((wish) => {
               if (wish.category === 'Работа') {
                  return (
                     <WishCard key={wish.id} id={wish.id} booking={wish.booking} wish={wish.wish} userId={wish.userId} category={wish.category} title={wish.title} shop={wish.shop} description={wish.description} holiday={wish.holiday} image={wish.image} />
                  );
               }
            })}
         </div>
            <div> Дом
            {wishes.map((wish) => {
               if (wish.category === 'Дом') {
                  return (

                     <WishCard key={wish.id} id={wish.id} booking={wish.booking} wish={wish.wish} userId={wish.userId} category={wish.category} title={wish.title} shop={wish.shop} description={wish.description} holiday={wish.holiday} image={wish.image} />

                  );
               }
            })}
            </div>
            <div> Общее
            {wishes.map((wish) => {
               if (wish.category === 'Общее') {
                  return (
                     <WishCard key={wish.id} id={wish.id} booking={wish.booking} wish={wish.wish} userId={wish.userId} category={wish.category} title={wish.title} shop={wish.shop} description={wish.description} holiday={wish.holiday} image={wish.image} />
                  );
               }
            })}
            </div>
      </div>
   );
}

export default WishList;
