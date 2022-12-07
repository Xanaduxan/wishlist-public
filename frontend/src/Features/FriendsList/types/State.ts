export interface FriendUser {
    id: number,
    name: string,
    login: string,
    gender: string,
    birthday?: Date,
    image: string,
    status: boolean
}

export interface State {

   myfriendsAll: FriendUser[],
   myFriend: FriendUser[],
   error: {
    message?: string,
   }

}
