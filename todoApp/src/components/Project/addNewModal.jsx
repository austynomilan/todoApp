import React from 'react'
import './addNewModal.css'

export default function addNewModal({setAddNewModal}) {
  return (
    <div className='addNewModal'>
      <h3>New Project!</h3>
        <input type="text" placeholder='project name...'/>
        <div className='addNew_controls'> 
          <button onClick={()=>setAddNewModal(false)}>Cancel</button>
          <button>+Add Project</button>
          </div>
    </div>
  )
}

