import * as actionTypes from '../actions/actionTypes';

const initialState = {
    recipes: [],
    input: '',
    loading: false
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INPUT_SEARCH:
            return {
                ...state,
                input: action.event.target.value
            }
        case actionTypes.LOADING_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOADING_END:
            return {
                ...state,
                loading: false
            }
        case actionTypes.SEARCH_SUCCESS:
            return {
                ...state,
                recipes: action.recipes.splice(0, 11)
            }
        case actionTypes.CLEAR:
            return {
                ...state,
                input: '',
            }




        default:
            return state;
    }
}

export default searchReducer;