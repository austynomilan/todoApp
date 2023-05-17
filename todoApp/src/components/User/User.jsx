import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'

export default function User() {
  return (
    <div className='UserHolder'>
      <FontAwesomeIcon 
      icon={faUser} 
      size='3x'
      />
      <div>
        <h2>Code Explained</h2>
        <span>Logout!</span>
      </div>
    </div>
  )
}

