export const EDIT_NAME = 'EDIT_NAME'
const EDIT_ADDRESS = 'EDIT_ADDRESS'

const initialState = {
  name: 'Lautaro',
  email: 'lautaro@mail.com',
  roles: ['user', 'admin'],
  address: {
    street: 'Siempre viva',
    number: '123',
    code: 'SP'
  }
}

export const editName = (name) => {
  return {
    type: EDIT_NAME,
    payload: { name }
  }
}

export const editAddress = (street) => {
  return {
    type: EDIT_ADDRESS,
    payload: { street }
  }
}

export function user(state = initialState, action) {
  switch (action.type) {
    case EDIT_NAME:
      return {
        ...state,
        name: action.payload.name
      }
    case EDIT_ADDRESS:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload.street
        }
      }
    default:
      return state
  }
}