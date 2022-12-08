import React from 'react';
import { useSelector } from 'react-redux';
import { RootState} from '../../store';

import { Wish } from '../WishList/types/state';


export default function Main():JSX.Element {
  const { wishes } = useSelector((state:RootState) => state.wishes);
  const { antiwishes } = useSelector((state:RootState) => state.antiwishes);
  
  function arrayRandElement(wishes: Wish[]) {
    let array = [];
    for(let i = 5; i > 0; i--) {
      let rand = Math.floor(Math.random() * wishes.length);
      array.push(wishes[rand]);
      wishes.slice(rand, 1)
    }
    return array;
}

  return (
    <div>
      <h1>Привет!</h1>
      <p>Это - простой сервис для ведения списка своих желаний и просмотра вишлистов твоих друзей!</p>
      <p>Ты можешь <a href="/auth/login">войти</a> или <a href="/auth/registration">зарегистрироваться</a> для начала работы.</p>
      <p>Мы собрали для тебя список самых желанных подарков, по мнению других пользователей.</p>
        <div><ul>
          {wishes.length && arrayRandElement(wishes).map((wish:Wish) => 
          <li key={wish.id}>{wish.title}</li>)}
             </ul>
      А то, чего люди совсем не хотят видеть, собрано{' '}
      <div>
        <ul>
        {antiwishes.length && arrayRandElement(wishes).map((antiWish:Wish) => 
          <li key={antiWish.id}>{antiWish.title}</li>)}
        </ul>
      </div>
          <a href="/antiwishlist">здесь</a>
        </div>
    </div>
  );
}