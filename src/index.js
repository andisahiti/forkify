import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import searchReducer from './store/reducer/searchReducer'
import recipeReducer from './store/reducer/recipeReducer'
import likeReducer from './store/reducer/likeReducer'
import ingReducer from './store/reducer/ingredientsReducer'



const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : null || compose;



const rootReducer = combineReducers({
    search: searchReducer,
    recipe: recipeReducer,
    like: likeReducer,
    ing: ingReducer
})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
