import React, { useState } from 'react';
import './AddNewProject.css';
import AddNewModal from './addNewModal';
import { dataBase } from '../../Firebase';
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore/lite';

export default function AddNewProject({ addNewModal, setAddNewModal }) {
  const [projectName, setProjectName] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    if( projectName ){
      try{
        const db = dataBase;
        const projectRef = collection(db, "Projects");

        const q = query(projectRef, where('name', '==', projectName));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty){
          await addDoc(projectRef, { name: projectName });
        }else{
          alert(`"${projectName}" already exits add a new project!`);
        }
      }catch(error){
        console.error("Err performing session: '", error)
      }
    }

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
            func={()=>setAddNewModal(false)}
            cancel={'Cancel'}
            submissionText={'+Add Project'}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}
