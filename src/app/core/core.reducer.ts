import { createReducer, on, Action } from "@ngrx/store";
import { EntityState, createInitialState } from "./core.state";
import { createFailureAction, createRequestAction, createSuccessAction } from "./core.action";

export function createEntityReducer<T>(baseType: string, initialState?: EntityState<T>) {
    const requestAction = createRequestAction<T>(baseType);
    const successAction = createSuccessAction<T>(baseType);
    const failureAction = createFailureAction<T>(baseType);

    const reducer = createReducer(
        initialState || createInitialState<T>(),
        on(requestAction, state => ({ ...state, loading: true })),
        on(successAction, (state, { payload }) => ({
            ...state,
            loading: false,
            success: true,
            fail: false,
            entities: payload
        })),
        on(failureAction, (state, { error }) => ({ ...state, loading: false, success: false, fail: true, error }))
    );

    return function entityReducer(state: EntityState<T> | undefined, action: Action) {
        return reducer(state, action);
    };
}