import { combineReducers } from 'redux'
import { counter } from './counter.reducer'
import { user } from './user.reducer'
import { products } from './products.reducer'
import { posts } from './posts.reducer'
import { todos } from './todo.reducer'

export default combineReducers({
  counter,
  user,
  products,
  posts,
  todos
})