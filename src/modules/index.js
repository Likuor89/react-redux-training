import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import counter from './counter'
import portfolios from './portfolios'

export default combineReducers ({
    routing: routerReducer,
    counter,
    portfolios,
})