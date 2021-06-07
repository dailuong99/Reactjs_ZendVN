import { HIDE_LOADING, SHOW_LOADING } from "./action";

const initState = {
    isShowLoading: false
}
export default function appReducer(state = initState, action) {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                isShowLoading: true
            }
        case HIDE_LOADING:
            return {
                ...state,
                isShowLoading: false
            }
        default:
            return state;
    }

}