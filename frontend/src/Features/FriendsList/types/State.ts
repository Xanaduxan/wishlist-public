export interface FriendUser {
    id: number,
    name: string,
    gender: string,
    birthday: Date,
    image: string,

}

export interface State {
   friends: FriendUser[],
   error: {
    message?: string,
   }

}


