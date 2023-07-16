import './Container.css'
import Card from '../Ui-Kit/Card'
import Todo from '../Todo/Todos'
export default function Container() {
  return (
    <div className='mainContainer'>
      <Card>
        <Todo />
      </Card>
    </div>
  )
}
