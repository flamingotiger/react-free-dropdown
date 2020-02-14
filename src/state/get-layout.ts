import * as React from 'react';
import { Dispatch, useContext } from 'react';

export interface GetLayoutState {
	selectLayout: { width: number; height: number };
}
export const getLayoutState: GetLayoutState = {
	selectLayout: { width: 0, height: 0 }
};
export enum GetLayoutActionType {
	GET_SELECT_LAYOUT = 'GET_SELECT_LAYOUT'
}
type GetLayoutAction = { type: GetLayoutActionType.GET_SELECT_LAYOUT; selectLayout: { width: number; height: number } };
export default function getLayoutReducer(state: GetLayoutState, action: GetLayoutAction): GetLayoutState {
	if (action.type === GetLayoutActionType.GET_SELECT_LAYOUT) {
		return { ...state, selectLayout: action.selectLayout };
	}
	return state;
}
export const GetLayoutStateContext = React.createContext<GetLayoutState | undefined>(undefined);
export const GetLayoutDispatchContext = React.createContext<Dispatch<GetLayoutAction> | undefined>(undefined);
export function useGetLayoutState() {
	const state = useContext(GetLayoutStateContext);
	if (!state) throw new Error('GetLayoutStateContext not found');
	return state;
}
export function useGetLayoutDispatch() {
	const dispatch = useContext(GetLayoutDispatchContext);
	if (!dispatch) throw new Error('GetLayoutDispatchContext not found');
	return dispatch;
}
