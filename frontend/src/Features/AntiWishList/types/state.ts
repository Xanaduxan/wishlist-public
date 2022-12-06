export interface AntiWish {
  id: number;
  userId: number;
  title: string;
  image: string | null;
  description: string | null;
  category: string | null;
}

export interface State {
  antiwishes: AntiWish[];
  error: {
    message?: string;
  };
}

export type AntiWishId = AntiWish['id'];

export type Action =
  | { type: 'antiwish/loadAntiWish'; payload: AntiWish[] }
  | { type: 'antiwish/addAntiWish'; payload: AntiWish }

  | { type: 'antiwish/delAntiWish'; payload: AntiWishId }
  | { type: 'antiwish/editAntiWish'; payload: AntiWish };
