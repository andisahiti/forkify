import * as actionTypes from './actionTypes'



export const getIng = (data) => {
    return {
        type: actionTypes.GET_ING,
        data: data
    }
}

export const deleteIng = (data) => {
    return {
        type: actionTypes.DELETE_ING,
        data: data
    }
}
export const deleteAll = () => {
    return {
        type: actionTypes.DELETE_ALL

    }
}
export const count = (event) => {
    return {
        type: actionTypes.COUNT,
        event: event

    }
}
export const unit = (event) => {
    return {
        type: actionTypes.UNITS,
        event: event

    }
}
export const ingredient = (event) => {
    return {
        type: actionTypes.INGREDIENTS,
        event: event

    }
}
export const add = (data) => {
    return {
        type: actionTypes.ADD,
        data: data

    }
}
export const localIng = () => {
    return {
        type: actionTypes.LOCAL_ING


    }
}