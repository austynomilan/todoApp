import { useState } from "react"
import AddNewModal from "./addNewModal"
import './RenameProject.css'

export default function RenameProject({addNewModal, setAddNewModal}) {
const [projectName, setProjectName] = useState('')


  return (
    <div className='RenameProject'>
          <AddNewModal
            value={projectName}
            setValue={setProjectName}
            heading={'Edit Project!'}
            submissionText={'Confirm'}
            setAddNewModal={setAddNewModal}
            addNewModal ={addNewModal}
          />
        </div>
  )
}
