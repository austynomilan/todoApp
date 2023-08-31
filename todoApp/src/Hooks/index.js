import { useEffect, useState } from 'react';
import { dataBase } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore/lite';


  export default function useFetchTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const db = dataBase; 
      const todosCollection = collection(db, 'Todos');
      const todosSnapshot = await getDocs(todosCollection);
      const todosList = todosSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setTodos(todosList);
      
    }

    fetchTodos();
  }, []);

  return todos;
}



