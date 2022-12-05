export interface FriendUser {
    id: number,
    name: string,
    login: string,
    gender: string,
    birthday: Date,
    image: string,

}

export interface State {

   myfriendsAll: FriendUser[],
   myFriend: FriendUser[],
   error: {
    message?: string,
   }

}
