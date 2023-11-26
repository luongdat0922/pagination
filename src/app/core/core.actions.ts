import { createAction, props } from '@ngrx/store';
import { MODULES } from '../app.config';

export namespace CoreActions {

  export const get = createAction('[Core] Get', props<{ moduleName: MODULES }>());

  export const getSuccess = createAction('[Core] Get Success', props<{ moduleName: MODULES; payload: any }>());

  export const getById = createAction('[Core] Get By Id', props<{ moduleName: MODULES; id: string }>());

  export const getByIdSuccess = createAction('[Core] Get By Id Success', props<{ moduleName: MODULES; payload: any[] }>());
  
}