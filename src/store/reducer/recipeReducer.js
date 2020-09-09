import * as actionTypes from '../actions/actionTypes'


const initialState = {

    loading: false,
    data: []
}


const recipeReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.START_FETCH:
            localStorage.setItem('localRecipe', JSON.stringify(state))

            return {
                ...state,
                loading: true
            }
        case actionTypes.END_FETCH:
            localStorage.setItem('localRecipe', JSON.stringify(state))

            return {
                ...state,
                loading: false
            }
        case actionTypes.LOCAL_RECIPE:
            const local = JSON.parse(localStorage.getItem('localRecipe'));
            if (local) {

                return {
                    ...local,
                    loading: false
                }
            } else {
                return {
                    ...state
                }
            }
        case actionTypes.FETCH_SUCCESS:
            localStorage.setItem('localRecipe', JSON.stringify(state))
            return {
                ...state,
                data: action.data
            }


        default:
            return state;
    }
}


export default recipeReducer;