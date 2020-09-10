import React from 'react'
import { connect } from 'react-redux';
import * as action from '../../store/actions/index'
import './Modal.css'

const Modal = (props) => {
    let show = false;

    if (props.error) {
        show = true
    }

    return (
        <div className='Pop'
            style={{
                transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                display: show ? 'block' : 'none'
            }}
        >
            <h2>The input in not part of the search queries !</h2>
            <h3>You can see all the search queries in the like bellow</h3>
            <h4><a href="https://forkify-api.herokuapp.com/phrases.html">https://forkify-api.herokuapp.com/phrases.html</a></h4>
            <br></br>
            <button style={{
                fontSize: '15px',
                padding: 4
            }} onClick={props.clearError}>Continue</button>
        </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Modal);