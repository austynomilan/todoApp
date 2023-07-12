import React, { useState } from 'react';
import './AddNewProject.css';
import AddNewModal from './addNewModal';

export default function AddNewProject({ addNewModal, setAddNewModal }) {
  const [projectName, setProjectName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(projectName);
    setAddNewModal(false);
    setProjectName('');
  };

  return (
    <div className='addNew_container'>
      <h4 onClick={() => setAddNewModal(!addNewModal)}>+</h4>
      {addNewModal && (
        <div className='addNewProject'>
          <AddNewModal
            value={projectName}
            setValue={setProjectName}
            heading={'New Project!'}
            submissionText={'+Add Project'}
            setAddNewModal={setAddNewModal}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}
