export interface State {
   requests: Request[],
   error: {
      message?: string,
   }
}

export interface Request {
   id: number,
   userId: number,
   friendId: number,
   status: boolean,
}
