import { useEffect, useState } from 'react';
import { dataBase } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore/lite';


export default function useFetchProjects(todos) {
    const [projects, setProjects] = useState([]);
    function calculateNum( projectName, todos ){
        return todos.filter(todo => todo.projectName === projectName).length
    }

  
    useEffect(() => {
      async function fetchProjects() {
        const db = dataBase; 
        const projectCollection = collection(db, 'Projects');
        const projectSnapshot = await getDocs(projectCollection);
        const projectLists = projectSnapshot.docs.map((doc) => {
            const projectName = doc.data().name
          return {
            id: doc.id,
            name: projectName,
            numOfTodos: calculateNum(projectName, todos)
          }
        });
        setProjects(projectLists);
      }
  
      fetchProjects();
    }, [todos]);
  
    return projects;
  }

