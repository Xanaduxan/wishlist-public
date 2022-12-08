export interface Group {
    id: number,
    name: string,
    adminId: number,
    picture: string,
    description: string,
}

export type groupId = Group['id'];

export interface State {
   groups: Group[],
   req: Req[],
    error: {
        message?:string,
    }
}
export interface Req {
    userId: number,
    groupId: number
}