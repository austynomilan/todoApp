import React, { useContext,  useEffect, useState  } from 'react';
import './Todos.css';
import Next7Days from './Next7Days';
import { TodoContext } from '../../Context';
import Todo from './Todo';



export default function Todos() {
  const { selectedProject, todos } = useContext(TodoContext);
   
  return (
    <div className='Todos'>
      <div className='selected-project'>{selectedProject}</div>
      <div className='todos'>
        {selectedProject === 'next 7 days' ? (
          <Next7Days />
        ) : (
          todos.map((todo) => <Todo todo={todo} key={todo.id} />)
          )}
      </div>
    </div>
  );
}