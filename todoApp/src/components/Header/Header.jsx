import './Header.css';
import User from '../User/User';
import AddNewTodo from '../Todo/AddNewTodo';
import Calenders from '../Calender/Calender';
import Project from '../Project/Project';

export default function Header() {
  return (
    <div className='headerHolder'>
      <User />
      <AddNewTodo />
      <Calenders />
      <Project />
    </div>
  );
}
