import React, { createContext, useState } from "react"
import useFetchTodos  from "../Hooks";
import useFetchProjects from "../Hooks/ProjectHook";


const TodoContext = createContext();

function TodoContextProvider({children}) {
    const defaultProject = 'today'
    const [selectedProject, setSelectedProject] = useState(defaultProject)
    const todos = useFetchTodos()
    const projects = useFetchProjects(todos)

  
  return (
    <TodoContext.Provider
    value={
        {
            selectedProject,
            setSelectedProject,
            todos,
            projects
        }
    }
    >
      {children}
    </TodoContext.Provider>
  )
}

export  {TodoContextProvider, TodoContext}
