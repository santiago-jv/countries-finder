import {createStore, combineReducers, compose} from 'redux'
import {countriesReducer} from '../reducers/countriesReducer'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    countriesReducer
})


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
