import { Injectable } from "@angular/core";
import { EntityEffects } from "../core/core.effect";
import { User } from "../model/user";
import { Actions, ofType } from "@ngrx/effects";
import { UserService } from "../service/user.service";
import { Observable, catchError, map, of } from "rxjs";
import { Action } from "@ngrx/store";
import { loadUsers, loadUsersFailure, loadUsersSuccess } from "./user.action";

@Injectable()
export class UserEffects extends EntityEffects<User> {
  constructor(
    actions$: Actions,
    private userService: UserService
  ) {
    super(actions$, userService);
  }
}