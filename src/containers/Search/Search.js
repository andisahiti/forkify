import React from 'react'
import logo from '../../assets/img/logo.png'
import icons from '../../assets/img/icons.svg'
import '../Main.css';
import Recipes from '../Recipes/Recipes'
import * as action from '../../store/actions/index'
import { connect } from 'react-redux'
import Likes from '../Likes/Likes'

export const Search = (props) => {



    let style = null;
    if (props.likes.length > 0) {
        style = {
            visibility: 'visible',
            opacity: '1'
        }
    }

    return (
        <React.Fragment>
            <header className="header">
                <img src={logo} alt="Logo" className="header__logo" />
                <form className="search">
                    <input
                        onChange={(event) => {
                            event.persist()
                            props.inputProp(event);

                        }}
                        value={props.inputValue}
                        type="text"
                        className="search__field"
                        placeholder="Search over 1,000,000 recipes..."
                    />

                    <button onClick={(e) => {
                        e.preventDefault()
                        props.searchProp(props.inputValue)
                        props.clear()
                    }} className="btn search__btn">
                        <svg className="search__icon">
                            <use href={icons + '#icon-magnifying-glass'}></use>
                        </svg>
                        <span>Search</span>
                    </button>
                </form>
                <div className="likes" >
                    <div className="likes__field" style={style}>
                        <svg className="likes__icon">
                            <use href={icons + '#icon-heart'}></use>
                        </svg>
                    </div>
                    <div className="likes__panel">
                        <ul className="likes__list">
                            <Likes></Likes>
                        </ul>
                    </div>
                </div>
            </header>
            <Recipes></Recipes>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        inputValue: state.search.input,
        recipesProp: state.search.recipes,
        likes: state.like.likes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        inputProp: (event) => dispatch(action.inputSearch(event)),
        searchProp: (query) => dispatch(action.searchRecipe(query)),
        clear: () => dispatch(action.clear())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Search);