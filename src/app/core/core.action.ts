import { createAction, props } from "@ngrx/store";

export function createActionTypes(baseType: string): Record<string, string> {
	return {
		REQUEST: `[${baseType}] Request`,
		SUCCESS: `[${baseType}] Success`,
		FAILURE: `[${baseType}] Failure`
	};
}

export function createRequestAction<T>(baseType: string) {
	const actionTypes = createActionTypes(baseType);
	return createAction(actionTypes['REQUEST']);
}

export function createSuccessAction<T>(baseType: string) {
	const actionTypes = createActionTypes(baseType);
	return createAction(actionTypes['SUCCESS'], props<{ payload: T[] }>());
}

export function createFailureAction<T>(baseType: string) {
	const actionTypes = createActionTypes(baseType);
	return createAction(actionTypes['FAILURE'], props<{ error: any }>());
}