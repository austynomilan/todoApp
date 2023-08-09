import './Container.css'
import Card from '../Ui-Kit/Card'
import Todo from '../Todo/Todos'
import EditTodo from '../Todo/EditTodo'
export default function Container() {
  return (
    <div className='mainContainer'>
      <Card>
        <Todo />
      </Card>
      <Card>
        <EditTodo />
      </Card>
    </div>
  )
}
