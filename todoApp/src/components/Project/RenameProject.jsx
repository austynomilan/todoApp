import { useState } from "react"
import AddNewModal from "./addNewModal"
import './RenameProject.css'

export default function RenameProject({setRename}) {
const [projectName, setProjectName] = useState('')


  return (
    <div className='RenameProject'>
          <AddNewModal
            value={projectName}
            setValue={setProjectName}
            heading={'Edit Project!'}
            func={()=>setRename(false)}
            submissionText={'Confirm'}
            cancel={'Cancel'}
          />
        </div>
  )
}
