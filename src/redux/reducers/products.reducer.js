// Action Constant
const ADD_PRODUCT = 'ADD_PRODUCT'

// Action creator
export const addProduct = (name) => {
  return {
    type: ADD_PRODUCT,
    payload: name
  }
}

const initState = ['Manzana', 'Banana', 'Naranja', 'Mandarina']

export const products = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload]
    default:
      return state
  }
}