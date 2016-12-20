import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promise from 'redux-promise'
import todoApp from '../reducers/index'

export default function configureStore(initialState) {
    const store = createStore(todoApp, initialState, composeWithDevTools(applyMiddleware(promise)))

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
}