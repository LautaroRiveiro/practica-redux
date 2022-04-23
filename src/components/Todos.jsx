import { useState } from "react"
import { connect } from "react-redux"
import { createTodo, deleteTodo, getTodos, updateTodo } from "../redux/reducers/todo.reducer"

function Todos({ todos, getTodos, updateTodo, createTodo, deleteTodo }) {
  const [text, setText] = useState('')
  const onAdd = (e) => {
    e.preventDefault()
    createTodo(text)
    setText('')
  }
  return (
    <div className="m-auto my-2 border max-w-3xl py-2">
      <h1 className="text-center mb-4">Todos [Estado array de objetos]</h1>
      <form onSubmit={onAdd}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="border" />
        <button type="submit" className="bg-blue-500 px-2 rounded">Agregar</button>
      </form>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              <input type="checkbox" value={todo.checked} onChange={() => { updateTodo(todo.id) }} />
              <span className={todo.checked ? "line-through" : ""}>{todo.text}</span>
              <button className="bg-yellow-600 px-2 mx-1" onClick={() => { deleteTodo(todo.id) }}>❌</button>
            </li>
          ))
        }
      </ul>
    </div>
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