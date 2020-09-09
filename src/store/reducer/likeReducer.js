import * as actionTypes from '../actions/actionTypes'


const initialState = {
    likes: [],
    isLiked: false
}

const likeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LIKE:
            localStorage.setItem('localLike', JSON.stringify(state))

            const likeArr = [...state.likes];
            for (const key in action.data) {
                likeArr.push(action.data[key])
            }
            return {
                ...state,
                likes: likeArr
            }
        case actionTypes.UN_LIKE:
            localStorage.setItem('localLike', JSON.stringify(state))

            const newLikeArr = [...state.likes];
            let unlikeNewArray;
            for (const key in newLikeArr) {

                if (newLikeArr[key].recipe_id === action.id) {

                    unlikeNewArray = newLikeArr.filter(element => {

                        return element.recipe_id !== action.id
                    })


                }


            }


            return {
                ...state,
                likes: unlikeNewArray
            }
        case actionTypes.IS_LIKED:
            localStorage.setItem('localLike', JSON.stringify(state))

            const isLiked = [...state.likes];
            let liked;

            for (const key of isLiked) {
                if (key.recipe_id === action.id) {
                    liked = true
                    break;
                } else if (key.recipe_id !== action.id) {
                    liked = false

                }
            }
            return {
                ...state,
                isLiked: liked
            }
        case actionTypes.LOCAL_LIKE:
            const local = JSON.parse(localStorage.getItem('localLike'));
            if (local) {

                return {
                    ...local
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

export default likeReducer;