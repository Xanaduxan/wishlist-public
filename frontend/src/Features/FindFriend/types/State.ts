export interface Friend {
  id: number,
  password: string,
  email: string,
  name: string,
  login: string,
  gender: string,
  image: string,

}

export interface State {
  newFriends: Friend[],
  error: {
    message?: string
  }
}
