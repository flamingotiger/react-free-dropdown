import * as React from 'react';
import { Dispatch, useContext } from 'react';

export interface StatusChangeState {
	isFocus: boolean;
}
export const statusChangeState: StatusChangeState = {
	isFocus: false
};
export enum StatusChangeActionType {
	IS_FOCUS = 'IS_FOCUS',
	ON_BLUR = 'ON_BLUR'
}
type StatusChangeAction =
	| { type: StatusChangeActionType.IS_FOCUS; isFocus: boolean }
	| { type: StatusChangeActionType.ON_BLUR };
export default function statusChangeReducer(state: StatusChangeState, action: StatusChangeAction): StatusChangeState {
	switch (action.type) {
		case StatusChangeActionType.IS_FOCUS:
			return { ...state, isFocus: action.isFocus };
		case StatusChangeActionType.ON_BLUR:
			return { ...state, isFocus: false };
		default:
			return state;
	}
}
export const StatusChangeStateContext = React.createContext<StatusChangeState | undefined>(undefined);
export const StatusChangeDispatchContext = React.createContext<Dispatch<StatusChangeAction> | undefined>(undefined);
export function useStatusChangeState() {
	const state = useContext(StatusChangeStateContext);
	if (!state) throw new Error('StatusChangeStateContext not found');
	return state;
}
export function useStatusChangeDispatch() {
	const dispatch = useContext(StatusChangeDispatchContext);
	if (!dispatch) throw new Error('StatusChangeDispatchContext not found');
	return dispatch;
}
