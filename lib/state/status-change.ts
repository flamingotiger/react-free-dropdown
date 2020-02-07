import produce from 'immer';
import { action as actions, ActionType, createReducer } from 'typesafe-actions';

export enum StatusChangeActionType {
	IS_FOCUS = 'IS_FOCUS',
	ON_BLUR = 'ON_BLUR'
}
export const setIsFocus = (isFocus: boolean) => actions(StatusChangeActionType.IS_FOCUS, { isFocus });
export const setOnBlur = () => actions(StatusChangeActionType.ON_BLUR);
export const actionCreator = { setIsFocus, setOnBlur };
export interface StatusChangeState {
	isFocus: boolean;
}
export type StatusChangeAction = ActionType<typeof actionCreator>;
const initialState: StatusChangeState = {
	isFocus: false
};
export default createReducer<StatusChangeState, StatusChangeAction>(initialState, {
	[StatusChangeActionType.IS_FOCUS]: (state, action) =>
		produce(state, (draft: StatusChangeState) => {
			draft.isFocus = action.payload.isFocus;
		}),
	[StatusChangeActionType.ON_BLUR]: state =>
		produce(state, (draft: StatusChangeState) => {
			draft.isFocus = false;
		})
});
