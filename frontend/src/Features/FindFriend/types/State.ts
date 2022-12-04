export interface Friend {
  id: number,
  password: string,
  email: string,
  name: string,
  gender: string,
  image: string,

}

export interface State {
  friends: Friend[],
  error: {
    message?: string
  }
}
