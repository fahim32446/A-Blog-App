import { Link } from 'react-router-dom';
import './st.css';


const AdminDashboard = () => {

  const Logout = () => {
     localStorage.clear()
  }

  return (
    <div>
      <div style={{ backgroundColor: '#2f4050', width: '200px', height: '100vh' }}>

        <ul className='DUl'>

          <Link style={{ textDecoration: 'none' }} to='../allPosts'>
            <li className='DLI'>
              All Post
            </li>
          </Link>

          <Link style={{ textDecoration: 'none' }} to='../addPost'>
            <li className='DLI'>
              Add Post
            </li>
          </Link>

          <Link style={{ textDecoration: 'none' }} to='../dashboard'>
            <li onClick={Logout} className='DLI'>
              Logout
            </li>
          </Link>

          <Link style={{ textDecoration: 'none' }} to='../login'>
            <li className='DLI'>
              Login
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default AdminDashboard