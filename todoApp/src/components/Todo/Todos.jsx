import React, { useContext } from 'react';
import './Todos.css';
import Next7Days from './Next7Days';
import { TodoContext } from '../../Context';
import Todo from './Todo';

export default function Todos() {
  
  const { todos,selectedProject } = useContext(TodoContext);
  
  
  // const todos = [
  //   {
  //     id: 'mt41',
  //     text: 'Go for a run',
  //     time: '10:00 AM',
  //     date: '06/03/2021',
  //     day: '6',
  //     checked: false,
  //     color: '#000000',
  //     project: 'personal',
  //   },
  //   {
  //     id: 'mt42',
  //     text: 'meeting',
  //     time: '9:00 AM',
  //     date: '08/03/2021',
  //     day: '1',
  //     checked: true,
  //     color: '#00ff00',
  //     project: 'work',
  //   },
  // ];

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
