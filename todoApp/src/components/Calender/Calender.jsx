import './Calender.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Counter from '../Ui-Kit/Counter';

export default function Calender() {
  const calenderItems = ['today', 'next 7 days', 'all days'];
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
            <p>{moments}</p> <h5>1</h5>
          </Counter>
        ))}
      </div>
    </div>
  );
}
