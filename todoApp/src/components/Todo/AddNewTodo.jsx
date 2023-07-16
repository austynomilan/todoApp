import { useState } from 'react';
import './AddNewTodo.css';
import Modal from '../Ui-Kit/Modal';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendar, faClock, faPallet } from '@fortawesome/free-solid-svg-icons';
import Counter from '../Ui-Kit/Counter';

export default function AddNewTodo() {
 
  const pickersStyle ={
    width: '90%',
    marginLeft: '8px'
  }
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');
  const [day, setDay] = useState(null);
  const [time, setTime] =useState(null)

  return (
    <div className='AddNewTodo'>
      <button className='btn' onClick={() => setShowModal(true)}>+New Todo</button>
      <Modal className='AddNewTodo-Modal' showModal={showModal} setShowModal={setShowModal}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         
        <form action=''>
          <h5> Add a new to do!</h5>
          <input
              type='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder='To do...'
              autoFocus
            />
          <div className='notice'>
            <FontAwesomeIcon icon={faBell}/> Remind Me!
          </div>
          <div className='inputControl'>
            <div className='date'>
              <FontAwesomeIcon icon={faCalendar} />
              <DatePicker
              sx={pickersStyle}
              value={day}
              onChange={(day)=>setDay(day)}
              orientation="portrait"
              />
            </div>
            <div className='date'>
              <FontAwesomeIcon icon={faClock} />
           <TimePicker 
          value={time}
          onChange={(time)=>setTime(time)}
          sx={pickersStyle}
    
           />
            </div>
          </div>
          <div className='projectSelect'>
            <div className='projectSelect-title'>
              <FontAwesomeIcon icon={faPallet} /> <p>Choose a project</p> 
            </div>
             <Counter>
              <button className='project active'>personal</button>
              <button className='project'>Work</button>
              <button className='project'>Work</button>
             </Counter>
          </div>
          <button className='submit'>+Add Todo</button>
        </form>
      </LocalizationProvider>
       
      </Modal>
    </div>
  );
}


