export interface State {
   friends: Friend[],
   error: {
      message?: string,
   }
}

export interface Friend {
   id: number,
   userId: number,
   friendId: number,
   status: boolean
}