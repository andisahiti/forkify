import React from 'react'
import './BackDrop.css'
import * as action from '../../store/actions/index'
import { connect } from 'react-redux';

const BackDrop = (props) => {

    let show = false;

    if (props.error) {
        show = true
    }

    return (
        <div onClick={props.clearError} className="Drop" style={{
            display: show ? 'block' : 'none'
        }}></div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        clearError: () => dispatch(action.clearError())
    }
}
const mapStateToProps = state => {
    return {
        error: state.search.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BackDrop);