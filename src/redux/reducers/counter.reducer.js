const initState = 0

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = ()=>{
  return {type: INCREMENT}
}

export const decrement = ()=>{
  return {type: DECREMENT}
}

export function counter(state = 0, action) {
  switch(action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}