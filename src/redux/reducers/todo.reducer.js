export const GET_TODOS = 'GET_TODOS'
export const CREATE_TODO = 'CREATE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export function getTodos() {
  return {
    type: GET_TODOS
  }
}

export function createTodo(text) {
  const id = Math.random().toString(16).substring(2)
  return {
    type: CREATE_TODO,
    payload: { text, id }
  }
}

export function updateTodo(id) {
  return {
    type: UPDATE_TODO,
    payload: { id }
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: { id }
  }
}

const initState = {
  todos: [{
    text: 'Todo inicial',
    checked: false,
    id: '1'
  }]
}

export function todos(state = initState, action) {
  switch (action.type) {
    case GET_TODOS:
      return state
    case CREATE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            text: action.payload.text,
            checked: false,
          }
        ]
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ? {
          ...todo,
          checked: !todo.checked
        } : todo)
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    default:
      return state
  }
}