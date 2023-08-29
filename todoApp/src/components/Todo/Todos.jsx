import React, { useContext,  useEffect, useState  } from 'react';
import './Todos.css';
import Next7Days from './Next7Days';
import { TodoContext } from '../../Context';
import Todo from './Todo';
import { app } from '../../Firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


// export default function Todos() {
   
// const {selectedProject } = useContext(TodoContext)

//   const todos = [
//     {
//       id: 'mt41',
//       text: 'Go for a run',
//       time: '10:00 AM',
//       date: '06/03/2021',
//       day: '6',
//       checked: false,
//       color: '#000000',
//       project: 'personal',
//     },
//     {
//       id: 'mt42',
//       text: 'meeting',
//       time: '9:00 AM',
//       date: '08/03/2021',
//       day: '1',
//       checked: true,
//       color: '#00ff00',
//       project: 'work',
//     },
//   ];

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
      const db = getFirestore(app);
      const todosCollection = collection(db, 'Todos');
      const todosSnapshot = await getDocs(todosCollection);
      const todosList = todosSnapshot.docs.map((doc) => doc.data());
      setTodos(todosList);
      console.log(todosList); 
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
          todos.map((todo) => <Todo todo={todo} key={todo.text} />)
        )}
      </div>
    </div>
  );
}