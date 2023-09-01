import { useState, useEffect, useContext } from 'react';
import TodoForms from './todoForms';
import { TodoContext } from '../../Context';
import './AddNewTodo.css';
import Modal from '../Ui-Kit/Modal';

export default function AddNewTodo({
  text,
  setText,
  day,
  setDay,
  time,
  setTime,
  handleSubmit,
}) {
  const [showModal, setShowModal] = useState(false);
  const { selectedProject } = useContext(TodoContext);
  const [todoProject, setTodoProject] = useState(() => selectedProject);

  useEffect(() => {
    setTodoProject(selectedProject);
  }, [selectedProject]);

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
          showButtons={true}
          setShowModal={setShowModal}
          setTodoProject={setTodoProject}
          todoProject={todoProject}
          handleSubmit={handleSubmit}
        />
      </Modal>
    </div>
  );
}
