import React from 'react'
import icons from '../../assets/img/icons.svg'

const RecipeInfo = (props) => {
    let time = 0;

    const timeFunction = (ingredients) => {
        const numberOfIngredients = ingredients.length;
        const periods = Math.ceil(numberOfIngredients / 3);
        time = periods * 15;
    }

    return (
        <React.Fragment>
            <div className="recipe__info">
                <svg className="recipe__info-icon">
                    <use href={icons + '#icon-stopwatch'}></use>
                </svg>
                <span className="recipe__info-data recipe__info-data--minutes">{timeFunction(props.ingredients)
                }{time}</span>
                <span className="recipe__info-text"> minutes</span>
            </div>
            <div className="recipe__info">
                <svg className="recipe__info-icon">
                    <use href={icons + '#icon-man'}></use>
                </svg>
                <span className="recipe__info-data recipe__info-data--people">{props.servings}</span>
                <span className="recipe__info-text"> servings</span>
            </div>
        </React.Fragment>
    )
}


export default RecipeInfo;
