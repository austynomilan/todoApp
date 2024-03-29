import './AllProject.css';
import { useContext, useState } from 'react';
import Counter from '../Ui-Kit/Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faClose } from '@fortawesome/free-solid-svg-icons'
import {TodoContext} from '../../Context'
import RenameProject from './RenameProject';


export default function AllProject({ projects, edit, setEdit}) {
const {setSelectedProject} = useContext(TodoContext)

const [rename, setRename] = useState(false)
  return (
    <div>
      <Counter className='projectCount'>
        <p
        onClick={()=>setSelectedProject(projects.name)}
        >{projects.name}</p>

        <div>
          {edit ? (
            <div className='editBtn'>
              <span className='span1' onClick={()=>setRename(true)}><FontAwesomeIcon icon={faPencil} /> </span>
              <span className='span2' onClick={()=>setEdit(!edit)}><FontAwesomeIcon icon={faClose} onClick={()=>setEdit(false)} /></span>
            </div>
          ) : projects.numOfTodos === 0 ? (
            ''
          ) : (
            <h5>{projects.numOfTodos}</h5>
          )}
        </div>
      </Counter>
      {rename &&
       <RenameProject setRename={setRename} projects={projects}/>
      }    
    </div>
  );
}

