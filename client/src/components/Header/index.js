import './style.scss';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import axios from 'axios';

function Header() {
  const { user, dispatch } = useContext(UserContext);
  const history = useHistory();

  const signoutClickHandler = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_SERVER}/api/auth`);
      dispatch({ type: 'signout' });
    } catch (e) {
      console.error(e);
    }
  };

  const username = user?.username !== '' ? user.username : '';

  return (
    <div className='header'>
      <div className='headerName'>SLANG STAN</div>
      <div className='dropdown'>
        <button
          className='btn btn-secondary dropdown-toggle'
          type='button'
          id='dropdownMenu2'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          {username === '' ? 'Menu' : username}
        </button>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenu2'>
          {username === '' && (
            <li>
              <button
                className='dropdown-item'
                type='button'
                onClick={() => {
                  history.push('/auth/signin');
                }}
              >
                Log in
              </button>
            </li>
          )}
          {username !== '' && (
            <li>
              <button
                className='dropdown-item'
                type='button'
                onClick={signoutClickHandler}
              >
                Log Out
              </button>
            </li>
          )}
          <li>
            <button
              className='dropdown-item'
              type='button'
              onClick={() => {
                history.push('/auth/signup');
              }}
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
