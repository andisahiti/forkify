import React, { useEffect } from 'react'
import './Main.css';
import Search from './Search/Search'
import Ingredients from './Ingredients/Ingredients'
import RecipeView from './Recipes/Recipe/Recipe'
import { connect } from 'react-redux';
import * as action from '../store/actions/index'
const Main = (props) => {


    useEffect(() => {
        props.localIng()
        props.localLike()
        props.localRecipe()
    }, [])


    return (
        <div className="container">
            <Search></Search>

            <RecipeView></RecipeView>

            <Ingredients></Ingredients>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        localIng: () => dispatch(action.localIng()),
        localLike: () => dispatch(action.localLike()),
        localRecipe: () => dispatch(action.localRecipe())
    }
}
export default connect(null, mapDispatchToProps)(Main);