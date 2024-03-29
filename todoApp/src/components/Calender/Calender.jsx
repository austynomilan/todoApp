import './Calender.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { TodoContext } from '../../Context';
import calenderItems from './Constant';
import Counter from '../Ui-Kit/Counter';
import { useContext } from 'react';

export default function Calender() {
  const { setSelectedProject } = useContext(TodoContext);

  return (
    <div className='calenderHolder'>
      <div className='titles'>
        <div className='calender'>
          <FontAwesomeIcon className='calenderIcon' icon={faCalendar} />
          <h2>Calender</h2>
        </div>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>

      <div className='countDays'>
        {calenderItems.map((moments) => (
          <Counter className='counts' key={moments}>
            <p onClick={() => setSelectedProject(moments)}>{moments}</p>{' '}
            <h5>1</h5>
          </Counter>
        ))}
      </div>
    </div>
  );
}
