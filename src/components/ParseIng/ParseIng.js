import React from 'react'
import icons from '../../assets/img/icons.svg'


const parseIng = (props) => {
    return (
        <li className="recipe__item">
            <svg className="recipe__icon">
                <use href={icons + '#icon-check'}></use>
            </svg>
            <div className="recipe__count">{props.recipeCount}</div>
            <div className="recipe__ingredient">
                <span className="recipe__unit">{props.unit}</span>
                {props.ingredient}
            </div>
        </li>
    )
}


export default parseIng;