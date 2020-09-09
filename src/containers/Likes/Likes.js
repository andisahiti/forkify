import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as action from '../../store/actions/index'
import '../Main.css'
import { limitString } from '../../shared/shared'
const Likes = (props) => {

    let list = null;


    if (props.likes) {
        list = props.likes.map((element, index) => {
            return (
                <li onClick={() => {
                    props.fetchProp(element.recipe_id)
                    props.liked(element.recipe_id)


                }} key={index}>
                    <a className="results__link" href={'#' + element.recipe_id}>
                        <figure className="results__fig">
                            <img src={element.image_url} alt={element.title}></img>
                        </figure>
                        <div className="likes__data">
                            <h4 className="likes__name">{limitString(element.title)}</h4>
                            <p className="likes__author">{element.author}</p>
                        </div>
                    </a>
                </li>
            )
        })
    }


    return (
        <React.Fragment>
            {list}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        likes: state.like.likes,
        recipes: state.search.recipes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProp: (id) => dispatch(action.fetch(id)),
        liked: (id) => dispatch(action.isLiked(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Likes);