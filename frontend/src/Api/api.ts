// import { FriendUser } from '../Features/FriendsList/types/State';

import UserRegisration from '../Features/Registration/types/userRegistration';

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
