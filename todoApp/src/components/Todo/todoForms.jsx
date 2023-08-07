import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faCalendar,
  faClock,
  faPallet,
} from '@fortawesome/free-solid-svg-icons';
import Counter from '../Ui-Kit/Counter';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export default function todoForms({
  handleSubmit,
  heading = false,
  text,
  setText,
  day,
  setDay,
  time,
  setTime,
  projects,
  showButtons = false,
}) {
  const pickersStyle = {
    width: '90%',
    marginLeft: '8px',
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
                onChange={(day) => setDay(day)}
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
            { <Counter>
                {projects.map((project) => (
                  <div className='project' key={project.id}>
                    {project.name}
                  </div>
                ))}
              </Counter> }
          </div>

          {showButtons && (
            <div>
              <div className='cancel'>
                <FontAwesomeIcon
                  style={{
                    float: 'right',
                    cursor: 'pointer',
                    padding: '0.9rem',
                  }}
                  icon={faClose}
                  size='2x'
                //   onClick={closeModal2}
                />
              </div>

              <div className='confirm'>
                <button className='submit'>+Add Todo</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </LocalizationProvider>
  );
}