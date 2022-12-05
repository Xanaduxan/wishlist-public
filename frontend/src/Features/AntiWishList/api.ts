import {AntiWish} from './types/state';

export const loadAntiWish = async (): Promise<AntiWish[]> => {
  const res = await fetch('http://localhost:4000/antiwishlist');
  return res.json();
};

export const addAsyncAntiWishes = async (antiwish: AntiWish): Promise<AntiWish> => {
  const res = await fetch('http://localhost:4000/api', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(antiwish),
  });
  return res.json();
};
