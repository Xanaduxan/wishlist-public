import FriendUser from '../Features/FriendsList/types/FriendUser';

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
