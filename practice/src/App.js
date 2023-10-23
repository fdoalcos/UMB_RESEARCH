import { useEffect, useState } from 'react'
import "./styles.css"
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'

export default function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })


  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  const addToDo = (title) => {
    setTodos(currTodo => {
      return [
          ...currTodo,
          {
              id: crypto.randomUUID(), 
              title,
              completed: false
          }
      ]
    })
  }

  const toggleTodo = (id, completed) => {
    setTodos(currentTodo => {
      return currentTodo.map(todo => {
        if (todo.id === id) {
          return {...todo,  completed}
        }
      }) 
    })
  }

  const deleteTodo = (id) => {
    console.log("This is the data id", id)
    setTodos(currTodo => {
      return currTodo.filter(todo => todo.id !== id)
    })
  }


  return (
  <>
    <NewTodoForm 
      onSubmit={addToDo}
    />
    <h1 
      className="header"
    >
      Todo list
    </h1>
    <TodoList 
      todos={todos}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
  </> 
  )
}