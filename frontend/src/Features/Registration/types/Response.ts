import UserFromDb from './UserFromDb';

export default interface Response {
  status?: string
  message?: string
  user?: UserFromDb
}
