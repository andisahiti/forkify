import React, { useState } from 'react'
import '../../Main.css'
import Spinner from '../../../components/Spinner/Spinner'
import { connect } from 'react-redux'
import icons from '../../../assets/img/icons.svg'
import * as action from '../../../store/actions/index'
import { formatCount } from '../../../shared/shared'
import ParseIng from '../../../components/ParseIng/ParseIng'
import Contact from '../../../components/Contact/Contact'
import RecipeInfo from '../../../components/RecipeInfo/RecipeInfo'


const Recipe = (props) => {

    const [servings] = useState(4)
    let ings;
    const parseIngredients = (ingredients) => {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
        const units = [...unitsShort, 'kg', 'g'];
        const newIngredients = ingredients.map(currentIngredient => {
            let objIngredient;
            let ingredient = currentIngredient.toLowerCase();
            unitsLong.forEach((unit, index) => {
                ingredient = ingredient.replace(unit, units[index]);
            });

            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            const arrayIngredient = ingredient.split(' ');
            const unitIndex = arrayIngredient.findIndex(ingr => units.includes(ingr));

            if (unitIndex > -1) {
                const arrayCount = arrayIngredient.slice(0, unitIndex);
                let count;

                if (arrayCount.length === 1) {
                    count = eval(arrayIngredient[0].replace('-', '+'));
                } else {
                    count = eval(arrayIngredient.slice(0, unitIndex).join('+'));
                }

                objIngredient = {
                    count,
                    unit: arrayIngredient[unitIndex],
                    ingredient: arrayIngredient.slice(unitIndex + 1).join(' ')
                };
            } else if (Number(arrayIngredient[0])) {
                objIngredient = {
                    count: Number(arrayIngredient[0]),
                    unit: '',
                    ingredient: arrayIngredient.slice(1).join(' ')
                };
            } else if (unitIndex === -1) {
                objIngredient = {
                    count: 1,
                    unit: '',
                    ingredient
                };
            }

            // Making sure count is not undefined
            objIngredient = {
                ...objIngredient,
                count: objIngredient.count ? objIngredient.count : 1,
            };

            return objIngredient;
        });
        ings = newIngredients;

    }


    let recipe = null;


    recipe = props.recipe.map((element, index) => {
        parseIngredients(element.ingredients, ings)
        props.liked(element.recipe_id)

        return (
            <React.Fragment key={index}>
                <figure className="recipe__fig">
                    <img src={element.image_url} alt={element.title} className="recipe__img"></img>
                    <h1 className="recipe__title">
                        <span>{element.title}</span>
                    </h1>
                </figure>
                <div className="recipe__details">
                    <RecipeInfo
                        servings={servings}
                        ingredients={element.ingredients}
                    ></RecipeInfo>
                    <button onClick={() => {
                        if (!props.isLiked) {
                            props.like(props.recipe)
                            props.liked(element.recipe_id)
                        } else {
                            props.unlike(element.recipe_id, props.isLiked)
                            props.liked(element.recipe_id)
                        }
                    }} className="recipe__love">
                        <svg className="header__likes">
                            <use href={icons + `#icon-heart${props.isLiked ? '' : '-outlined'}`}></use>
                        </svg>
                    </button>
                </div>
                <div className="recipe__ingredients">
                    <ul className="recipe__ingredient-list">
                        {ings.map((element) => {
                            return (
                                <ParseIng
                                    recipeCount={formatCount(element.count)}
                                    unit={element.unit}
                                    ingredient={element.ingredient}
                                ></ParseIng>
                            )
                        })}
                    </ul>
                    <button onClick={() => {
                        props.getIngredients(ings)
                    }} className="btn-small recipe__btn recipe__btn--add">
                        <svg className="search__icon">
                            <use href={icons + '#icon-shopping-cart'}></use>
                        </svg>
                        <span>Add to shopping list</span>
                    </button>
                </div>
                <div className="recipe__directions">
                    <Contact
                        author={element.author}
                        url={element.url}
                    ></Contact>
                </div>
            </React.Fragment>
        )
    })


    if (props.loading) {
        recipe = <Spinner></Spinner>
    }

    return (
        <div className="recipe">
            {recipe}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.recipe.loading,
        recipe: state.recipe.data,
        isLiked: state.like.isLiked
    }
}
const mapDispatchToProps = dispatch => {
    return {
        like: (data) => dispatch(action.like(data)),
        liked: (id) => dispatch(action.isLiked(id)),
        unlike: (id, isLiked) => dispatch(action.unlike(id, isLiked)),
        getIngredients: (data) => dispatch(action.getIng(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);