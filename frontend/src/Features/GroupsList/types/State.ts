export interface Group {
    id: number,
    name: string
}

export interface State {
   groups: Group[],
    error: {
        message?:string,
    }
}