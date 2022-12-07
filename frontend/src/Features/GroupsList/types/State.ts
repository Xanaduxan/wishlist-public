export interface Group {
    id: number,
    name: string,
    adminId: number,
    picture: string,
    description: string,
}

export interface State {
   groups: Group[],
    error: {
        message?:string,
    }
}