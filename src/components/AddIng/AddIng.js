import React from 'react'
import { connect } from 'react-redux'
import * as action from '../../store/actions/index'


const AddIng = (props) => {
    let countValue = 0
    if (props.countValue > 0) {
        countValue = props.countValue
    }
    return (
        <div className="shopping__count shopping__count--entry">
            <input
                onChange={(event) => {
                    event.persist()
                    props.count(event)

                }}
                value={countValue}
                type="number"
                step='0.5'
                className="shopping__count-value shopping__input--entry-count"
            />
            <input
                onChange={(event) => {
                    event.persist()
                    props.unit(event)
                }}
                value={props.unitValue}
                type="text"
                placeholder="unit"
                className="shopping__count-value shopping__input--entry-unit"
            />
            <input
                onChange={(event) => {
                    event.persist()
                    props.ingredient(event)
                }}
                value={props.ingValue}
                type="text"
                placeholder="ingredient"
                className="shopping__count-value shopping__input--entry-ingredient"
            />
        </div>
    )
}

const mapStateToProps = state => {
    return {

        countValue: state.ing.count,
        unitValue: state.ing.units,
        ingValue: state.ing.ing,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unit: (event) => dispatch(action.unit(event)),
        count: (event) => dispatch(action.count(event)),
        ingredient: (event) => dispatch(action.ingredient(event))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddIng);

