export interface Request {
   id: number,
   userId: number,
   friendId: number,
   status: boolean
   login: string,
   image: string,
   gender: string
}

export interface State {
   requests: Request[],
   error: {
      message?: string
   }
}
