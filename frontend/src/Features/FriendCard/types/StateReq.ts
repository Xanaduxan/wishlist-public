export interface Request {
   id: number,
   userId: number,
   friendId: number,
   status: boolean
}

export interface State {
   request: Request[],
   error: {
      message?: string
   }
}
