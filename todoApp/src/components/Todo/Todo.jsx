import React from 'react'
import './Todo.css'

function Todo({todo}) {
  return (
    <div className='_todo'>
      {todo.text}
    </div>
  )
}

export default Todo
