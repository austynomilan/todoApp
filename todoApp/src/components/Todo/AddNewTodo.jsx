import { useState, useEffect, useContext } from 'react';
import TodoForms from './todoForms';
import { TodoContext } from '../../Context';
import './AddNewTodo.css';
import calenderItems from '../Calender/Constant';
import { dataBase } from '../../Firebase';
import { ref, set } from "firebase/database";
import Modal from '../Ui-Kit/Modal';
import { collection } from 'firebase/firestore/lite';

export default function AddNewTodo({ projectType, handleSubmit, text, setText, day, setDay, time, setTime }) {
  const [showModal, setShowModal] = useState(false);
  

  const { selectedProject } = useContext(TodoContext);
  const [todoProject, setTodoProject] = useState(() => selectedProject);


  useEffect(() => {
    setTodoProject(selectedProject);
  }, [selectedProject]);

  handleSubmit = (e) =>{
    e.preventDefault()
    if( text && !calenderItems.includes(todoProject) ){
     function writeTodoData(text, date, day, time, todoProject){
        const db = dataBase;
        set(collection(db, 'Todos'), {
          text: text,
          date: moment(date).format('MM/DD/YYYY'),
          day: moment(day).format('d'),
          time: moment(time).format('hh:mm A'),
          checked: false,
          color: randomcolor(),
          projectName: todoProject
        })
      }
      setShowModal(false)
      setText('')
      setDay(new Date())
      setTime(new DataTransfer())
      writeTodoData()
    }
  }
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
          setTodoProject={setTodoProject}
          todoProject={todoProject}
          handleSubmit={handleSubmit}
        />
      </Modal>
    </div>
  );
}
