import './AllProject.css';
import { useState } from 'react';
import Counter from '../Ui-Kit/Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faClose } from '@fortawesome/free-solid-svg-icons'
import RenameProject from './RenameProject';


export default function AllProject({ projects, edit, setEdit, setAddNewModal, addNewModal}) {
const [rename, setRename] = useState(false)
  return (
    <div>
      <Counter className='projectCount'>
        <p>{projects.name}</p>

        <div>
          {edit ? (
            <div className='editBtn'>
              <span className='span1' onClick={()=>setRename(true)}><FontAwesomeIcon icon={faPencil} /> </span>
              <span className='span2' onClick={()=>setEdit(!edit)}><FontAwesomeIcon icon={faClose} onClick={()=>setEdit(false)} /></span>
            </div>
          ) : projects.numOfTodo === 0 ? (
            ''
          ) : (
            <h5>{projects.numOfTodo}</h5>
          )}
        </div>
      </Counter>
      {rename &&
       <RenameProject setRename={setRename} />
      }    
    </div>
  );
}

