import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { IService } from "./core.service";
import { createFailureAction, createRequestAction, createSuccessAction } from "./core.action";

@Injectable()
export class EntityEffects<T> {
    constructor(
        private actions$: Actions,
        private apiService: IService<T>
    ) { }

    createEffect(baseType: string): Observable<Action> {
        const requestAction = createRequestAction<T>(baseType);
        const successAction = createSuccessAction<T>(baseType);
        const failureAction = createFailureAction<T>(baseType);

        return createEffect(() =>
            this.actions$.pipe(
                ofType(requestAction),
                exhaustMap(() =>
                    this.apiService.getAll().pipe(
                        map((response: T[]) => successAction({ payload: response })),
                        catchError((error: any) => of(failureAction({ error })))
                    )
                )
            )
        );
    }
}