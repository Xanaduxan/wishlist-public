import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Modal from '../Modal/Modal';
import WishCard from '../WishCard/WishCard';
import { Wish } from './types/state';


function WishList(): JSX.Element {
   const { wishes } = useSelector((state: RootState) => state.wishes);
   const { id } = useSelector((state:RootState) => state.user);

   console.log(wishes);
   return (
      <div className="main">
         <Modal />
         <div> Работа
   {wishes.filter((wish:Wish) => Number(wish.userId) === id).map((wish:Wish) => {
      if (wish.category === 'Работа') {
         return (
            <WishCard
              key={wish.id}
              id={wish.id}
              booking={wish.booking}
              wish={wish.wish}
              userId={wish.userId}
              category={wish.category}
              title={wish.title}
              shop={wish.shop}
              description={wish.description}
              holiday={wish.holiday}
              image={wish.image}
            />
         );
      }
   })}

         </div>
            <div> Дом
            {wishes.filter((wish:Wish) => Number(wish.userId) === id).map((wish:Wish) => {
               if (wish.category === 'Дом') {
                  return (

                     <WishCard key={wish.id} id={wish.id} booking={wish.booking} wish={wish.wish} userId={wish.userId} category={wish.category} title={wish.title} shop={wish.shop} description={wish.description} holiday={wish.holiday} image={wish.image} />

                  );
               }
            })}
            </div>
            <div> Общее
            {wishes.filter((wish:Wish) => Number(wish.userId) === id).map((wish:Wish) =>{
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
