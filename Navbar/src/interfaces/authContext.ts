import type { IUser } from "./userInterface";


export interface IAuthContext {
    user:IUser
    loading:boolean
    logout:()=>void
}