import './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faGamepad, faPencil, faPizzaSlice, faPlus } from '@fortawesome/free-solid-svg-icons'
import Counter from '../Ui-Kit/Counter'
import AddNewProject from './AddNewProject'
import { useState } from 'react'

export default function Project() {
  const [show, setShow] = useState(true)
  const projectType = ['work', 'other', 'personal']
  return (
    <div className='projectHolder'>
      <div className="title">
        <div className="project">
        <FontAwesomeIcon icon={faGamepad} />
        <h2>Projects</h2>
        </div>
        <div className="controls">
            <FontAwesomeIcon icon={faPencil} />
            <AddNewProject />
            <FontAwesomeIcon icon={faArrowUp} onClick={() => setShow(false)}/>
        </div>
      </div>

      <div className="projectType">
      {projectType.map(projects=>(
       <Counter className='projectCount' key={projects}><p>{projects}</p> <h5>1</h5></Counter> 
      ))}
      </div>
    </div>
  )
}
