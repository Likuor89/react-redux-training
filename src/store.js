import {createStore, applyMiddleware, compose} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'
import {composeWithDevTools} from 'redux-devtools-extension'

export const history = createHistory()

const initialState = {
//    trades: [
//        {
//            quote: 'GAZP',
//            volume: '200',
//            price: 142.33,
//            portfolioId: 2,
//        },
//    ],
//    quotes: [
//        {
//            quote: 'GAZP',
//            price: 138.25,
//        },
//    ]
}
const enhacers = []
const middleware =[
    thunk,
    routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension =window.__REDUX_DEVTOOLS_EXTENSION__
    
    if (typeof devToolsExtension === 'function') {
        enhacers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
applyMiddleware(...middleware),
  ...enhacers
)

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
)

export default store