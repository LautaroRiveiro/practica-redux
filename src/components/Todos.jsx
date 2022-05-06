import { useState } from "react"
import { connect } from "react-redux"
import { createTodo, deleteTodo, getTodos, updateTodo } from "../redux/reducers/todo.reducer"
import Section from './Section'

function Todos({ todos, getTodos, updateTodo, createTodo, deleteTodo }) {
  const [text, setText] = useState('')
  const onAdd = (e) => {
    e.preventDefault()
    createTodo(text)
    setText('')
  }
  return (
    <Section title='Todos' subtitle='Estado array de objetos'>
      <form onSubmit={onAdd} className='flex'>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="border" />
        <button type="submit" className="btn">Agregar</button>
      </form>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id} className="m-1 flex items-baseline gap-2">
              <input type="checkbox" value={todo.checked} onChange={() => { updateTodo(todo.id) }} />
              <span className={todo.checked ? "line-through" : ""}>{todo.text}</span>
              <button className="px-2 mx-1" onClick={() => { deleteTodo(todo.id) }}>❌</button>
            </li>
          ))
        }
      </ul>
    </Section>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => dispatch(getTodos()),
    updateTodo: (id) => dispatch(updateTodo(id)),
    createTodo: (text) => dispatch(createTodo(text)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)