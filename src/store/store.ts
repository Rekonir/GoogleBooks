import { createStore } from "redux";

const defaultState = {
    category: 'all',
    sort: 'relevance',
    errorCode: 200
}
interface IAction {
    type: string
    payload: string | number
}
export const storeReducer = (state = defaultState, action: IAction) => {
    switch (action.type) {
        case 'changeCategory':
            return {
                ...state, category: action.payload as string
            }
        case 'changeSort':
            return {
                ...state, sort: action.payload as string
            }
        case 'changeErrorCode':
            return {
                ...state, errorCode: action.payload as number
            }
        default:
            return state
    }
}
export const store = createStore(storeReducer)