import { useState } from "react"
import AddNewModal from "./addNewModal"
import './RenameProject.css'

export default function RenameProject({setRename, projects}) {
const [newProjectName, setNProjectName] = useState(projects.name)


  return (
    <div className='RenameProject'>
          <AddNewModal
            value={newProjectName}
            setValue={setNProjectName}
            heading={'Edit Project!'}
            func={()=>setRename(false)}
            submissionText={'Confirm'}
            cancel={'Cancel'}
          />
        </div>
  )
}
