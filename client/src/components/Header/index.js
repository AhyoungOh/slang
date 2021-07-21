import './style.scss';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();

  return (
    <div className='header'>
      <div className='headerName'>Slang</div>
      <div class='dropdown'>
        <button
          class='btn btn-secondary dropdown-toggle'
          type='button'
          id='dropdownMenu2'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          Menu
        </button>
        <ul class='dropdown-menu' aria-labelledby='dropdownMenu2'>
          <li>
            <button
              class='dropdown-item'
              type='button'
              onClick={() => {
                history.push('/signin');
              }}
            >
              Login
            </button>
          </li>
          <li>
            <button
              class='dropdown-item'
              type='button'
              onClick={() => {
                history.push('/signout');
              }}
            >
              Logout
            </button>
          </li>
          <li>
            <button
              class='dropdown-item'
              type='button'
              onClick={() => {
                history.push('/signup');
              }}
            >
              Sign up
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
