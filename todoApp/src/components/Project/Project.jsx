import './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faGamepad, faPencil, } from '@fortawesome/free-solid-svg-icons'
import Counter from '../Ui-Kit/Counter'
import AllProject from './AllProject'
import AddNewProject from './AddNewProject'
import { useState } from 'react'

export default function Project() {
  const [show, setShow] = useState(true)
  const projectType = [
    {id:1, name:'Personal', numOfTodo: 0},
    {id:2, name:'Work', numOfTodo: 1},
    {id:3, name:'Other', numOfTodo: 2}
  ]
  const [edit, setEdit] = useState(false)
  const pencilColor = edit ? "green" : "#000"
  return (
    <div className='projectHolder'>
      <div className="title">
        <div className="project">
        <FontAwesomeIcon icon={faGamepad} />
        <h2>Projects</h2>
        </div>
        <div className="controls">
            { show && <FontAwesomeIcon icon={faPencil} color={pencilColor} onClick={()=> setEdit(!edit)} />}
             <AddNewProject />
            <FontAwesomeIcon icon={faArrowUp} onClick={() => setShow(!show)}/>
        </div>
      </div>

      <div className="projectType">
      {projectType.map(projects=>(
       show &&  <AllProject  key={projects.id}  projects={projects } edit={edit} setEdit={setEdit}/>
      ))}
      </div>
    </div>
  )
}
