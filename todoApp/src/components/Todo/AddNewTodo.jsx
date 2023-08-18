import { useState, useEffect, useContext } from 'react';
import TodoForms from './todoForms';
import { TodoContext } from '../../Context';
import './AddNewTodo.css';
import Modal from '../Ui-Kit/Modal';

export default function AddNewTodo({ projectType }) {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');
  const [day, setDay] = useState(null);
  const [time, setTime] = useState(null);

const { setSelectedProject } = useContext(TodoContext);



  return (
    <div className='AddNewTodo'>
      <button className='btn' onClick={() => setShowModal(true)}>
        +New Todo
      </button>
      <Modal
        className='AddNewTodo-Modal'
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <TodoForms
          heading='Add a new to do!'
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          projectType={projectType}
          showButtons={true}
          setShowModal={setShowModal}
        />
      </Modal>
    </div>
  );
}
