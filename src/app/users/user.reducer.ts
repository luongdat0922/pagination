import { createReducer, on } from "@ngrx/store";
import { initUserState } from "./user.state";
import * as uActions from "./user.action";

export const userReducer = createReducer(
    initUserState,
    on(uActions.getAllUsers, state => ({ ...state, loading: true })),
    on(uActions.getUsers, (state, { data }) => ({ ...state, loading: true })),
    on(uActions.getUsersSuccess, (state, { users }) => ({ ...state, loading: false, success: true, fail: false, users: users })),
    on(uActions.getUsersFail, (state, { error }) => ({ ...state, loading: false, success: false, fail: true, error: error })),
 );