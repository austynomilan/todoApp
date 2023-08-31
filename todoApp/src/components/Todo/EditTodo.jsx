import { useState } from 'react';
import TodoForms from './todoForms';
import './EditTodo.css';

export default function EditTodo({ projectType }) {
  const [text, setText] = useState('');
  const [day, setDay] = useState(null);
  const [time, setTime] = useState(null);
  

  return (
    <div>
      <div className='editTodo'>
        <h4>Edit Todo</h4>
      </div>
      <div className='editContainer'>
        {/* <TodoForms
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          projectType={projectType}
        /> */}
      </div>
    </div>
  );
}
