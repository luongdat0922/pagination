import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { User } from "../model/user";
import * as uActions from "./user.action";
import { UserService } from "../user.service";

@Injectable()
export class UserEffects {

    getAllUsers$ = createEffect(() => this.actions$.pipe(
        ofType(uActions.getAllUsers),
        exhaustMap((action: any) =>
          this.userService.getAllUsers().pipe(
            map((users: User[]) => {
              console.log(users);
              return uActions.getUsersSuccess({ users: users });
            }),
            catchError((error: any) => of(uActions.getUsersFail({ error: error })))
          )
        )
      ));

    constructor(private actions$: Actions,
        private userService: UserService) { }
}
