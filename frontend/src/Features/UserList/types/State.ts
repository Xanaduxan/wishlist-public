export interface State {
   users: User[],
   error: {
      message?: string,
   }
}

export interface User {
   id: number,
   login: string,
   image: string
}
