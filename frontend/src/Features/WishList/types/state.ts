export interface Wish {
    id: number,
    booking: boolean,
    wish: boolean,
    userId: number,
    title: string,
    image: string,
    shop: string,
    description: string,
    category: string,
    holiday: string,
}

export interface State {
    wishes: Wish[],
    error: {
        message?: string,
       }
}

export type Action =
| { type: 'INIT_WHISHES'; payload: Wish[] }
| { type: 'wishes/initTenAsyncWishes'; payload: Wish[] };
