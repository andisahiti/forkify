import React from 'react'
import '../Main.css';
import Spinner from '../../components/Spinner/Spinner';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index'

import { limitString } from '../../shared/shared'


export const Recipes = (props) => {



    let list = props.recipesProp.map(element => {
        return (
            <div key={element.id} >
                <li onClick={() => {
                    props.fetchProp(element.recipe_id)
                    props.liked(element.recipe_id)
                }}>
                    <a className="results__link" href={'#' + element.recipe_id}>
                        <figure className="results__fig">
                            <img src={element.image_url} alt={element.title}></img>

                        </figure>
                        <div className="results__data">
                            <h4 className="results__name">{limitString(element.title)}</h4>
                            <p className="results__author">{element.publisher}</p>
                        </div>
                    </a>
                </li>
            </div>
        )
    })

    if (props.loadingProp) {
        list = <Spinner></Spinner>

    }
    return (
        <div className="results">
            <ul className="results__list">
                {list}
            </ul>

        </div>
    )
}
const mapStateToProps = state => {
    return {
        loadingProp: state.search.loading,
        recipesProp: state.search.recipes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProp: (id) => dispatch(action.fetch(id)),
        liked: (id) => dispatch(action.isLiked(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);