import configureStore from './configureStore'
import rootReducer from './rootReducer'

const initialState = {}

if (window.__INITIAL_STATE__) {
  const state = window.__INITIAL_STATE__
  Object.keys(state).forEach((key) => {
    initialState[key] = state[key]
  })
}

const store = configureStore(initialState, rootReducer)

export default store
