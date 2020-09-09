import React from 'react'
import '../../containers/Main.css'
import icons from '../../assets/img/icons.svg'
const Spinner = (props) => {
    return (
        <div className="loader">
            <svg>
                <use href={icons + '#icon-cw'}></use>
            </svg>
        </div>
    )
}

export default Spinner;