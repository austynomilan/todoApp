import React, { useContext,  useEffect, useState  } from 'react';
import './Todos.css';
import Next7Days from './Next7Days';
import { TodoContext } from '../../Context';
import Todo from './Todo';
import { dataBase, app } from '../../Firebase';
import { collection, getDocs } from 'firebase/firestore/lite';


// export default function Todos() {
// const {selectedProject } = useContext(TodoContext);
// const [todos, setTodos] = useState([]);
// const collectionRef = collection(dataBase, "Todos");

// useEffect(()=>{
//   const getData = () =>{
//   getDocs(collectionRef).then((response)=>{
//     data = response.docs.map((item)=>{
//       return item.data()
//     })
//     setTodos(data)
//     console.log(data)
//   })
// }
// getData()
// }, [])

  

//   return (
//     <div className='Todos'>
//       <div className='selected-project'>{selectedProject}</div>
//       <div className='todos'>
//         {selectedProject === 'next 7 days' ? (
//           <Next7Days />
//         ) : (
//           todos.map((todo) => <Todo todo={todo} key={todo.id} />)
//         )}
//       </div>
//     </div>
//   );
// }


export default function Todos() {
  const { selectedProject } = useContext(TodoContext);
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

  return (
    <div className='Todos'>
      <div className='selected-project'>{selectedProject}</div>
      <div className='todos'>
        {selectedProject === 'next 7 days' ? (
          <Next7Days />
        ) : (
          todos.map((todo) => <Todo todo={todo} key={todo.id} />)
          )}
      </div>
    </div>
  );
}