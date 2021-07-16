import './style.scss';
import { Link } from 'react-router-dom';
function Button() {
  return (
    <div className="div">
      <Link to="/signup">
        <button className="button">Sign Up</button>
      </Link>
      <Link to="/signin">
        <button className="button">Sign In</button>
      </Link>
      <Link to="/list">
        <button className="button">Go to List</button>
      </Link>
      <Link to="/creator_login">
        <button className="button">Upload Slang Dictionary</button>
      </Link>
    </div>
  );
}

export default Button;
