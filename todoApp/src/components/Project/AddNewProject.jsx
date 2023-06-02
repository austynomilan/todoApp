import useState from 'react'
import './AddNewProject.css'
import AddNewModal from './addNewModal'

export default function AddNewProject() {
  
  return (
    <div className="addNew_container">
      <h4>+</h4>
      { 
      <div className='addNewProject'>
       <AddNewModal />
      </div>
      }
      
    </div>
  )
}
