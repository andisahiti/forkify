import React from 'react'
import icons from '../../assets/img/icons.svg'
import '../Main.css';
import Ingredient from './Ingredients/Ingredient';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index'
import CopyRight from '../../components/CopyRight/CopyRight'
import AddIng from '../../components/AddIng/AddIng'

export const Ingredients = (props) => {

    let style = null;

    if (props.ingredients.length > 0) {
        style = {
            visibility: 'visible',
            opacity: '1'
        }
    }
    let disable = true;
    let isDisabled = ' disabled'
    if (props.countValue > 0 && props.unitValue.length > 0 && props.ingValue.length > 0) {
        disable = false;
        isDisabled = '';
    }
    return (

        <div className="shopping">
            <h2 className="heading-2">My Shopping List</h2>
            <div className="shopping__input-group">
                <p className="shopping__input-paragraph">
                    Add your own ingredient to your shopping list</p>
                <AddIng></AddIng>
                <span tooltip={disable ? 'Fields are empty' : null} flow="top">
                    <button
                        disabled={disable}
                        onClick={() => {
                            props.add({
                                count: props.countValue,
                                unit: props.unitValue,
                                ingredient: props.ingValue
                            })
                        }} className={"btn-small recipe__btn shopping__btn--add-element" + isDisabled}>
                        <svg className="search__icon">
                            <use href={icons + '#icon-shopping-cart'}></use>
                        </svg>
                        <span>Add</span>
                    </button>
                </span>
            </div>
            <hr />
            <button style={style} onClick={() => {
                props.deleteAll()
            }} className="btn-small recipe__btn shopping__btn--remove">
                <span>Remove all</span>
            </button>
            <ul className="shopping__list" style={style}>
                <Ingredient></Ingredient>
            </ul>
            <CopyRight></CopyRight>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        ingredients: state.ing.ingredients,
        countValue: state.ing.count,
        unitValue: state.ing.units,
        ingValue: state.ing.ing,
    }
}

const mapDispatchToProps = dispatch => {
    return {

        deleteAll: () => dispatch(action.deleteAll()),
        add: (data) => dispatch(action.add(data))

    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);