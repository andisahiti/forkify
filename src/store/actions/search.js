import * as actionTypes from './actionTypes'
import axios from '../../axios-default'

export const startSearching = () => {
    return {
        type: actionTypes.LOADING_START
    }
}
export const endSearching = () => {
    return {
        type: actionTypes.LOADING_END
    }
}
export const clear = () => {
    return {
        type: actionTypes.CLEAR
    }
}
export const clearRecipes = () => {
    return {
        type: actionTypes.CLEAR_RECIPES
    }
}

export const searchSuccess = (recipes) => {
    return {
        type: actionTypes.SEARCH_SUCCESS,
        recipes: recipes
    }
}
export const searchRecipe = (query) => {
    return dispatch => {
        dispatch(startSearching())
        axios.get(`/search?&q=${query}`).then(response => {
            const fetchedRecipes = [];
            for (let key in response.data.recipes) {
                fetchedRecipes.push({
                    ...response.data.recipes[key],
                    id: key
                });
            }
            dispatch(searchSuccess(fetchedRecipes))
            dispatch(endSearching())
        }).catch(error => {
            alert(`Error 404 : Recipe not found `)
        })
    }
}

export const inputSearch = (event) => {
    return {
        type: actionTypes.INPUT_SEARCH,
        event: event
    }
}

