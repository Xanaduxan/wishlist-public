import State from '../Features/Profile/types/State';
import Response from '../Features/Registration/types/Response';
import { UserLogin } from '../Features/Registration/types/User';
import { Wish } from '../Features/WishList/types/state';

import UserRegisration from '../Features/Registration/types/userRegistration';
import { AntiWish } from '../Features/AntiWishList/types/state';

export const logout = async (): Promise<Response> => {
  const res = await (fetch('http://localhost:4000/auth/logout', {
    credentials: 'include',
  }));
  return res.json();
};

export const registration = async (user: UserRegisration): Promise<Response> => {
  const res = await (fetch('http://localhost:4000/auth/registration', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(user),
  }));
  return res.json();
};

export const login = async (user: UserLogin): Promise<Response> => {
  const res = await (fetch('http://localhost:4000/auth/login', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(user),
  }));
  return res.json();
};

export const userInit = async (): Promise<Response> => {
  const res = await (fetch('http://localhost:4000/auth/init', {
    method: 'get',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
  }));
  return res.json();
};

export const userUpdate = async (userInfo: State): Promise<Response> => {
  const res = await (fetch('http://localhost:4000/profile', {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(userInfo),
  }));
  return res.json();
};

export const sendAvatar = async (photo: any): Promise<Response> => {
  console.log('===============', photo, photo[0]);
  const newFile = new FormData();
  newFile.append('homesImg', photo[0]);
  const res = await (fetch('http://localhost:4000/profile/upload', {
    method: 'POST',
    // headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(newFile),
  }));
  return res.json();
};

export const userProfileInit = async (id: string): Promise<Response> => {
  const res = await (fetch(`http://localhost:4000/profile/${id}`, {
    method: 'get',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
  }));
  return res.json();
};

export const userProfileWishesInit = async (id: string): Promise<{ wishes: Wish[] }> => {
  const res = await (fetch(`http://localhost:4000/profile/wishes/${id}`, {
    method: 'get',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
  }));
  return res.json();
};

export const userProfileAntiWishesInit = async (id: string): Promise<{ antiWishes: AntiWish[] }> => {
  const res = await (fetch(`http://localhost:4000/profile/antiWishes/${id}`, {
    method: 'get',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
  }));
  return res.json();
};
