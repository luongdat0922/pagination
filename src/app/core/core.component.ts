import { Store, createSelector, createFeatureSelector, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Component } from '@angular/core';
import { CoreActions } from '../core/core.actions';
import { MODULES } from '../app.config';
import { IEntity, IState, IList } from './core.model';

@Component({
  template: ``
})
export abstract class CoreComponent<T> {
    
  getFractalState = createFeatureSelector<IState<T>>(MODULES[this.module]);
  getState = createSelector(this.getFractalState, (state: IState<T>) => state);
  getData = createSelector(this.getFractalState, (state: IState<T>): T => (state.data) ? state.data[0] : <T>{});
  getList = createSelector(this.getFractalState, (state: IState<T>): IList<T> => (state.list) ? state.list : <IList<T>>{});

  state$: Observable<IState<T>> = this.store.pipe(select(this.getState));
  data$: Observable<T> = this.store.pipe(select(this.getData));
  list$: Observable<IList<T>> = this.store.pipe(select(this.getList));

  constructor(
    private module: MODULES,
    protected store: Store
  ) { }

  protected dispatchGet() {
    this.store.dispatch(CoreActions.get({ moduleName: this.module }));
  }

  protected dispatchGetById(id: string) {
    this.store.dispatch(CoreActions.getById({ moduleName: this.module, id }));
  }

}