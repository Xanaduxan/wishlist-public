export default interface UserFromDb {
  login: string
  email: string
  id: number
  surname: string
  name: string
  gender: string
  image: string
  birthday?: string
}
