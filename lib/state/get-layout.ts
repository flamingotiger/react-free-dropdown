import produce from 'immer';
import { action as actions, ActionType, createReducer } from 'typesafe-actions';

export enum GetLayoutActionType {
	GET_SELECT_WIDTH = 'GET_SELECT_WIDTH'
}
export const getSelectWidth = (selectWidth: number) => actions(GetLayoutActionType.GET_SELECT_WIDTH, { selectWidth });
export const actionCreator = { getSelectWidth };
export interface GetLayoutState {
	selectWidth: number;
}
export type GetLayoutAction = ActionType<typeof actionCreator>;
const initialState: GetLayoutState = {
	selectWidth: 0
};
export default createReducer<GetLayoutState, GetLayoutAction>(initialState, {
	[GetLayoutActionType.GET_SELECT_WIDTH]: (state, action) =>
		produce(state, (draft: GetLayoutState) => {
			draft.selectWidth = action.payload.selectWidth;
		})
});
