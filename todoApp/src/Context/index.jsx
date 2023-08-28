import React, { createContext, useState } from "react"
import { useTodo, useProject } from "../Hooks";

const TodoContext = createContext();

function TodoContextProvider({children}) {
    const defaultProject = 'today'
    const [selectedProject, setSelectedProject] = useState(defaultProject)

  const todos = useTodo()
  const projects = useProject(todos)
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
