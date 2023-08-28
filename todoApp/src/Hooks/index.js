import { useState, useEffect } from 'react'
import firebase from '../Firebase'

export function useTodo(){
    const [todo, setTodo] = useState([])

   useEffect(() => {
    let unSubscribe = firebase
    .firestore()
    .collection('Todos')
    .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => ({
            id: id.doc,
            ...doc.data()
        }))
        setTodo(data)
    })
    return () => unSubscribe()
   })

   return todo
}

export function useProject(){
    const [project, setProject] = useState([])
    function calcNumOfTodo(projectName, todo){
       return todos.filter(todo.projectName === projectName).length
    }

   useEffect(() => {
    let unSubscribe = firebase
    .firestore()
    .collection('Projects')
    .onSnapshot( snapshot => {
        const data = snapshot.docs.map(doc =>{
            const projectName = doc.data().projectName

            return{
                id: doc.id,
                name: projectName,
                numOfTodo: calcNumOfTodo(projectName, todos)
            }
        })
        setProject(data)
    })
    return () => unSubscribe()
   })

   return project
}