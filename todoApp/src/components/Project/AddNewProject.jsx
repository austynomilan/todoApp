import useState from 'react'
import './AddNewProject.css'
import AddNewModal from './addNewModal'

export default function AddNewProject({addNewModal,setAddNewModal}) {
  
  return (
    <div className="addNew_container">
      <h4 onClick={()=>setAddNewModal(!addNewModal)}>+</h4>
      { addNewModal &&
      <div className='addNewProject'>
       <AddNewModal setAddNewModal={setAddNewModal}/>
      </div>
      }
      
    </div>
  )
}
