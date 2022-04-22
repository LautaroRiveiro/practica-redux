import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { EDIT_NAME } from './reducers/user.reducer'


//Middlewares
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("Ha ocurrido una nueva acción: ", action)
      next(action)
    }
  }
}

const confirmEditName = (store) => (next) => (action) => {
  if (action.type === EDIT_NAME) {
    const confirm = window.confirm('¿Confirma la edición?')
    if (confirm) {
      next(action)
    }
  } else {
    next(action)
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk, confirmEditName, logger))

export default store