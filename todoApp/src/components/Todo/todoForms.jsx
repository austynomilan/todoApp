import React, { useState, useContext, useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import calenderItems from '../Calender/Constant';
import { dataBase } from '../../Firebase';
import moment from 'moment';
import randomcolor from 'randomcolor';
import { collection, addDoc } from 'firebase/firestore/lite';
import { TodoContext } from '../../Context';
import './todoForms.css';
import {
  faBell,
  faCalendar,
  faClock,
  faPallet,
} from '@fortawesome/free-solid-svg-icons';
import Counter from '../Ui-Kit/Counter';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export default function todoForms({
  heading = false,
  setTodoProject,
  todoProject,
  showButtons = false,
  setShowModal = true,
}) {
  const pickersStyle = {
    width: '90%',
    marginLeft: '8px',
  };

  const { projects } = useContext(TodoContext);
  const [text, setText] = useState('');
  const [day, setDay] = useState(null);
  const [time, setTime] = useState(null);
  const date = new Date();

  const handleDateChange = (date) => {
    setDay(date);
  };

  const writeTodoData = async (text, date, day, time, todoProject) => {
    try {
      const db = dataBase;
      const todoRef = collection(db, 'Todos');

      const newTodo = {
        text,
        date: moment(date).format('MM/DD/YYYY'),
        day: moment(day).format('d'),
        time: moment(time).format('hh:mm A'),
        checked: false,
        color: randomcolor(),
        projectName: todoProject,
      };
      await addDoc(todoRef, newTodo);
      alert('Todo added successfully!');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && !calenderItems.includes(todoProject)) {
      writeTodoData(text, day, date, time, todoProject);
      setShowModal(false);
      setText('');
      setDay(new Date());
      setTime(new Date());
      writeTodoData();
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <form onSubmit={handleSubmit} className='todoForm'>
          <div className='text'>
            {heading && <h5>{heading}</h5>}
            <input
              type='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder='To do...'
              autoFocus
            />
          </div>
          <div className='notice'>
            <FontAwesomeIcon icon={faBell} /> Remind Me!
          </div>
          <div className='inputControl'>
            <div className='date'>
              <FontAwesomeIcon icon={faCalendar} />
              <DatePicker
                sx={pickersStyle}
                value={day}
                onChange={handleDateChange}
                orientation='portrait'
              />
            </div>
            <div className='date'>
              <FontAwesomeIcon icon={faClock} />
              <TimePicker
                value={time}
                onChange={(time) => setTime(time)}
                sx={pickersStyle}
              />
            </div>
          </div>
          <div className='pick-project'>
            <div className='projectSelect-title'>
              <FontAwesomeIcon icon={faPallet} /> <p>Choose a project</p>
            </div>
            {
              <Counter>
                {projects.length > 0 ? (
                  projects.map((project) => (
                    <div
                      className={`project ${
                        project.name === todoProject ? 'active' : ''
                      }`}
                      onClick={() => setTodoProject(project.name)}
                      key={project.id}
                    >
                      {project.name}
                    </div>
                  ))
                ) : (
                  <h5 className='noProject'>
                    Please add a project before proceeding!
                  </h5>
                )}
              </Counter>
            }
          </div>

          {showButtons && (
            <div>
              <div className='cancel'>
                <FontAwesomeIcon
                  style={{
                    float: 'right',
                    cursor: 'pointer',
                    padding: '0.9rem',
                    position: 'absolute',
                    top: '19%',
                    left: '58%',
                  }}
                  icon={faClose}
                  size='2x'
                  onClick={() => setShowModal(false)}
                />
              </div>

              <div className='confirm'>
                <button
                  className='submit'
                  onClick={() => {
                    handleSubmit;
                  }}
                >
                  +Add Todo
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </LocalizationProvider>
  );
}
