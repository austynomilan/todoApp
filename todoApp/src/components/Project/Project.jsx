import { useState, useContext } from 'react';
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faGamepad,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
import AllProject from './AllProject';
import AddNewProject from './AddNewProject';
import { TodoContext } from '../../Context';



export default function Project() {
  const [show, setShow] = useState(true);
  const { projects } = useContext(TodoContext)
  

  
  const [edit, setEdit] = useState(false);
  const pencilColor = edit ? 'green' : '#000';
  const [addNewModal, setAddNewModal] = useState(false);

  return (
    <div className='projectHolder'>
      <div className='title'>
        <div className='project'>
          <FontAwesomeIcon icon={faGamepad} />
          <h2>Projects</h2>
        </div>
        <div className='controls'>
          {show && projects.length > 0 && (
            <FontAwesomeIcon
              icon={faPencil}
              color={pencilColor}
              onClick={() => setEdit(!edit)}
            />
          )}
          <AddNewProject
            addNewModal={addNewModal}
            setAddNewModal={setAddNewModal}
          />
          <FontAwesomeIcon icon={faArrowUp} onClick={() => setShow(!show)} />
        </div>
      </div>

      <div className='projectType'>
        {projects.map(
          (project) =>
            show && (
              <AllProject
                key={project.id}
                projects={project}
                edit={edit}
                setEdit={setEdit}
                setAddNewModal={setAddNewModal}
                addNewModal={addNewModal}
              />
            )
        )}
      </div>
    </div>
  );
}
