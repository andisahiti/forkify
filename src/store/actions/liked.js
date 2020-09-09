import * as actionTypes from './actionTypes'


export const like = (data) => {
    return {
        type: actionTypes.LIKE,
        data: data
    }
}

export const unlike = (id, isLiked) => {
    return {
        type: actionTypes.UN_LIKE,
        id: id,
        isLiked: isLiked
    }
}
export const isLiked = (id) => {
    return {
        type: actionTypes.IS_LIKED,
        id: id
    }
}
export const localLike = () => {
    return {
        type: actionTypes.LOCAL_LIKE

    }
}