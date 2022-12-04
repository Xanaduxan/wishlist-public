import User from './User';

export default interface Response {
  status: string
  message?: string
  user?: User
}
