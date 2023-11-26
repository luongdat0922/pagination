import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { CoreActions } from './core.actions';
import { MODULES } from '../app.config';
import { CoreService } from './core.service';

@Injectable()
export class CoreEffects<T, TList> {

  constructor(
    private moduleName: MODULES,
    private _actions$: Actions,
    private _service: CoreService<T>
  ) {
  }

  get$ = createEffect(() =>
    this._actions$.pipe(
      ofType(CoreActions.get),
      switchMap(action =>
        this._service.getAll().pipe(
          map(data => CoreActions.getSuccess({ moduleName: this.moduleName, payload: data })),
          catchError(error => of(/* handle error action */))
        )
      )
    )
  );

}
