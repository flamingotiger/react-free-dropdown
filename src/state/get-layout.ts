import * as React from 'react';
import { Dispatch, useContext } from 'react';

export interface GetLayoutState {
	selectWidth: number;
}
export const getLayoutState: GetLayoutState = {
	selectWidth: 0
};
export enum GetLayoutActionType {
	GET_SELECT_WIDTH = 'GET_SELECT_WIDTH'
}
type GetLayoutAction = { type: GetLayoutActionType.GET_SELECT_WIDTH; selectWidth: number };
export default function getLayoutReducer(state: GetLayoutState, action: GetLayoutAction): GetLayoutState {
	if (action.type === GetLayoutActionType.GET_SELECT_WIDTH) {
		return { ...state, selectWidth: action.selectWidth };
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
