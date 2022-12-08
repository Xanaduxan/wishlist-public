import { AntiWish } from '../../AntiWishList/types/state';
import { Wish } from '../../WishList/types/state';

export default interface State {
  name: string
  surname: string
  gender: string
  image: string
  wishes?: Wish[]
  antiWishes?: AntiWish[]
  id?: number
}
