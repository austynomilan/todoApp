import React, { useState } from 'react'
import './Todo.css'
import {BsFillCheckCircleFill, BsCircle, BsFillTrash3Fill, BsRepeat } from 'react-icons/bs'


function Todo({todo}) {
  const [hover, setHover] = useState(false)
  return (
    <div className='_todo'>
      <div 
      className="todoContainer"
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      >
        <div className="check">
          {
            todo.checked?
            <span className='checked'>
              <BsFillCheckCircleFill color='#bebebe'/>
            </span>
            :
            <span>
              <BsCircle color={todo.color}/>
            </span>
          }
        </div>
        <div className="todoText">
          <p style={{color: todo.checked? '#bebebe' : '#000'}}>{todo.text}</p>
          <span>{todo.time} - {todo.projectName}</span>
          <div className={`line ${todo.checked? 'line_through' : ''}`}></div>
        </div>
        <div className="todoControl">
          <div className="addToNextDay">
            {
              todo.checked &&
              <span><BsRepeat /></span>
            }
          </div>
          <div className="deleteTodo">
            {
              (hover || todo.checked) &&
              <span><BsFillTrash3Fill /></span>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
