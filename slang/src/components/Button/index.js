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
    </div>
  );
}

export default Button;
