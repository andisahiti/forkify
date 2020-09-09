import React from 'react'
import icons from '../../assets/img/icons.svg'

const Contact = (props) => {
    return (
        <React.Fragment>
            <h2 className="heading-2">How to cook it</h2>
            <p className="recipe__directions-text">
                This recipe was carefully designed and tested by
        <span className="recipe__by">{' ' + props.author}</span>. Please check out directions at their website.</p>
            <a className="btn-small recipe__btn" href={props.url} target="_blank">
                <span>Directions</span>
                <svg className="search__icon">
                    <use href={icons + '#icon-triangle-right'}></use>
                </svg>
            </a>
        </React.Fragment>
    )
}


export default Contact;