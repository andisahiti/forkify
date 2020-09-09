import React from 'react'
import icons from '../../../assets/img/icons.svg'
import '../../Main.css'
import { connect } from 'react-redux';
import * as action from '../../../store/actions/index'
const Ingredient = (props) => {

    let items = null;

    if (props.ingredients.length > 0) {

        items = props.ingredients.map((element, index) => {

            return (
                <li key={index} className="shopping__item" data-id={index}>
                    <div className="shopping__count">
                        <input type="number" value={element.count} step="0.5" className="shopping__count-value"></input>
                        <p>{element.unit}</p>
                    </div>
                    <p className="shopping__description">{element.ingredient}</p>
                    <button onClick={() => {
                        props.delete(element.ingredient)
                    }} className="shopping__delete btn-tiny">
                        <svg>
                            <use href={icons + '#icon-circle-with-cross'}></use>
                        </svg>
                    </button>
                </li>
            )
        })
    }



    return (
        <React.Fragment>
            {items}
        </React.Fragment>
    )
}
const mapStateToProps = state => {
    return {
        ingredients: state.ing.ingredients
    }
}

const mapDispatchToProps = dispatch => {
    return {
        delete: (data) => dispatch(action.deleteIng(data))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Ingredient);