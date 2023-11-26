import { createReducer, on } from '@ngrx/store';
import { CoreActions } from './core.actions';
import { IState } from './core.model';
import { HttpErrorResponse } from '@angular/common/http';

export const initialState: IState<any> = {
  isLoading: false,
  data: [],
  list: { count: 0, next: '', previous: null, results: [] },
  error: new HttpErrorResponse({}),
  success: '',
};

export const coreReducer = createReducer(
  initialState,
  on(CoreActions.get, state => ({ ...state, isLoading: true })),
  on(CoreActions.getSuccess, (state, { payload }) => ({ ...state, isLoading: false, list: payload })),
  on(CoreActions.getById, state => ({ ...state, isLoading: true })),
  on(CoreActions.getByIdSuccess, (state, { payload }) => ({ ...state, isLoading: false, data: [...state.data, ...payload] })),
);