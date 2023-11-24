import { createAction, props } from "@ngrx/store";
import { User } from "../model/user";

export enum EUserActions {
    GETALLUSERS = '[USER] Get ALL Users',
    GETUSERS = '[USER] Get Users',
    GETUSERS_SUCCESS = '[USER] Get Users Success',
    GETUSERS_FAIL = '[USER] Get Users Fail',
}

export const getAllUsers = createAction( EUserActions.GETALLUSERS );
export const getUsers = createAction( EUserActions.GETUSERS,  props<{data: any}>() );
export const getUsersSuccess = createAction( EUserActions.GETUSERS_SUCCESS, props<{users: User[]}>() );
export const getUsersFail = createAction( EUserActions.GETUSERS_FAIL, props<{error: any}>() );