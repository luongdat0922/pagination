import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { User } from '../model/user';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from './user.action';

export interface UserState extends EntityState<User> {
  loading: boolean;
  error: any;
}

export const adapter = createEntityAdapter<User>();

export const initialState: UserState = adapter.getInitialState({
  loading: false,
  error: null
});

export const userReducer = createReducer(
  initialState,
  on(loadUsers, state => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => adapter.setAll(users, { ...state, loading: false })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, loading: false, error }))
);