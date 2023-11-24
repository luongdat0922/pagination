import { EntityState, createInitialState } from "../core/core.state";
import { User } from "../model/user";

export interface UserState extends EntityState<User> {

}

export const initialState: UserState = {
  ...createInitialState<User>(),
};