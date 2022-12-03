import FriendUser from '../Features/FriendsList/types/FriendUser';
import Response from '../Features/Registration/types/Response';
import { UserLogin } from '../Features/Registration/types/User';
import UserRegisration from '../Features/Registration/types/userRegistration';

export const logout = async (): Promise<Response> => {
  const res = await (fetch('http://localhost:4000/auth/logout', {
    credentials: 'include',
  }));
  return res.json();
};

const myFriend = async (): Promise<FriendUser> => {
  const res = await (fetch('http://localhost:4000/myfriends', {
    credentials: 'include',
  }));
  return res.json();
};

export default myFriend;

export const registration = async (user: UserRegisration): Promise<Response> => {
  const res = await (fetch('http://localhost:4000/auth/registration', {
  method: 'post',
   headers: { 'Content-type': 'application/json' },
   credentials: 'include',
   body: JSON.stringify(user),
}));
return res.json();
};

export const login = async (user: UserLogin):Promise<Response> => {
  const res = await (fetch('http://localhost:4000/auth/login', {
  method: 'post',
  headers: { 'Content-type': 'application/json' },
   credentials: 'include',
   body: JSON.stringify(user),
  }));
  return res.json();
};
