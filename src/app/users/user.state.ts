import { User } from "src/app/model/user";

export interface IUserState {
    users: User[];
    loading: boolean;
    success: boolean;
    fail: boolean;
    error: any;
}

export const initUserState: IUserState = {users: [], loading: true, success: false, fail: false, error: null};