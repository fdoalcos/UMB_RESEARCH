import React from 'react'
import ToDoItem from './ToDoItem'

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "no todos"}
      {
        todos.map(todo => {
          return (
            // <TodoListItem
            //     // id={todo.id} 
            //     // completed={todo.completed} 
            //     // title={todo.title} 
            //     {...todo}
            // />
            <ToDoItem 
                {...todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
          )
        })
      }
    </ul>
  )
}

export default TodoList