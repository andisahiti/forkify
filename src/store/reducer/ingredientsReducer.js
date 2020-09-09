import * as actionTypes from '../actions/actionTypes'
const initialState = {
    ingredients: [],
    count: 0,
    units: '',
    ing: ''
}


const ingReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GET_ING:

            let newArr = [...state.ingredients];
            for (const key in action.data) {
                newArr.push(action.data[key])
            }

            localStorage.setItem('localIng', JSON.stringify(state))
            localStorage.setItem('ing', JSON.stringify(newArr))
            return {
                ...state,
                ingredients: newArr
            }
        case actionTypes.DELETE_ING:

            let newArrDel = [...state.ingredients];
            let filteredArr;

            filteredArr = newArrDel.filter((element) => {
                return element.ingredient !== action.data
            })
            localStorage.setItem('ing', JSON.stringify(filteredArr))
            localStorage.setItem('localIng', JSON.stringify(state))

            return {
                ...state,
                ingredients: filteredArr
            }
        case actionTypes.DELETE_ALL:
            localStorage.setItem('localIng', JSON.stringify(state))
            localStorage.setItem('ing', JSON.stringify([]))

            return {
                ...state,
                ingredients: []
            }
        case actionTypes.ADD:

            const addedIngs = [...state.ingredients];
            addedIngs.push(action.data)
            localStorage.setItem('ing', JSON.stringify(addedIngs))

            return {
                ...state,
                ingredients: addedIngs,
                count: 0,
                units: '',
                ing: ''
            }
        case actionTypes.COUNT:

            return {
                ...state,
                count: action.event.target.value
            }
        case actionTypes.UNITS:

            return {
                ...state,
                units: action.event.target.value
            }
        case actionTypes.INGREDIENTS:

            return {
                ...state,
                ing: action.event.target.value
            }
        case actionTypes.LOCAL_ING:
            const local = JSON.parse(localStorage.getItem('localIng'));
            const ing = JSON.parse(localStorage.getItem('ing'));
            if (local && ing) {

                return {
                    ...local,
                    ingredients: ing,
                    count: 0,
                    units: '',
                    ing: ''
                }
            } else if (local) {
                return {
                    ...local,
                    count: 0,
                    units: '',
                    ing: ''
                }
            } else {
                return {
                    ...state
                }
            }

        default:
            return state;
    }

}


export default ingReducer;