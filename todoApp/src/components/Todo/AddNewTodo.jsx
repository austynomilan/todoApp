import { useState } from 'react';
import TodoForms from './todoForms';
import './AddNewTodo.css';
import Modal from '../Ui-Kit/Modal';


export default function AddNewTodo() {
 
  const [showModal, setShowModal] = useState(false);
  const projectType = [
    { id: 1, name: 'Personal', numOfTodo: 0 },
    { id: 2, name: 'Work', numOfTodo: 1 },
    { id: 3, name: 'Other', numOfTodo: 2 },
  ];
  const [text, setText] = useState('');
  const [day, setDay] = useState(null);
  const [time, setTime] = useState(null);
 

  return (
    <div className='AddNewTodo'>
      <button className='btn' onClick={() => setShowModal(true)}>+New Todo</button>
      <Modal className='AddNewTodo-Modal' showModal={showModal} setShowModal={setShowModal}>
    <TodoForms
    heading = 'Add a new to do!'
    text={text}
    setText={setText}
    day={day}
    setDay={setDay}
    time={time}
    setTime={setTime}
    projects={projectType}
    showButtons={true}
    />
      </Modal>
    </div>
  );
}


