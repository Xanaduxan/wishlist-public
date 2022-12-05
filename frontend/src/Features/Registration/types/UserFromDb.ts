export default interface UserFromDb {
  login: string
  email: string
  id: number
  surname?: string
  name?: string
  gender?: string
  birthday?: string
}
