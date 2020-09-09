import * as actionTypes from './actionTypes'
import axios from '../../axios-default'


export const startFetch = () => {
    return {
        type: actionTypes.START_FETCH
    }
}
export const endFetch = () => {
    return {
        type: actionTypes.END_FETCH
    }
}
export const fetchSuccess = (data) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        data: data
    }
}
export const localRecipe = () => {
    return {
        type: actionTypes.LOCAL_RECIPE

    }
}
export const fetch = (id) => {
    return dispatch => {
        dispatch(startFetch())
        axios.get(`/get?rId=${id}`).then(response => {
            const { title, publisher, image_url, source_url, ingredients, recipe_id } = response.data.recipe;
            const fetchedRecipes = [];
            fetchedRecipes.push(
                {
                    author: publisher,
                    title: title,
                    image_url: image_url,
                    url: source_url,
                    ingredients: ingredients,
                    recipe_id: recipe_id
                }
            )

            dispatch(fetchSuccess(fetchedRecipes))
            dispatch(endFetch())
        }).catch(error => {
            alert(error)
        })
    }
}