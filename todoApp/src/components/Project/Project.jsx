import './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faGamepad, faPencil, faPizzaSlice, faPlus } from '@fortawesome/free-solid-svg-icons'
import Counter from '../Ui-Kit/Counter'

export default function Project() {
  return (
    <div className='projectHolder'>
      <div className="title">
        <div className="project">
        <FontAwesomeIcon icon={faGamepad} />
        <h2>Projects</h2>
        </div>
        <div className="controls">
            <FontAwesomeIcon icon={faPencil} />
            <FontAwesomeIcon icon={faPlus} />
            <FontAwesomeIcon icon={faArrowUp} />
        </div>
      </div>

      <div className="projectType">
        <Counter className='projectCount'><p>work</p> <h5>1</h5></Counter>
        <Counter className='projectCount'><p>other</p> <h5>1</h5></Counter>
        <Counter className='projectCount'> <p>personal</p> <h5>1</h5></Counter>
      </div>
    </div>
  )
}
