import { createStore } from 'redux'
import todoApp from '../reducers/index'

export default function configureStore(initialState) {
    const store = createStore(todoApp, initialState)

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
}