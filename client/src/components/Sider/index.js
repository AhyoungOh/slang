import 'boxicons';
import './style.scss';
import { Link } from 'react-router-dom';

function Sider() {
  return (
    <div className='sidenav'>
      <a
        class='btn btn-secondary'
        data-bs-toggle='offcanvas'
        href='#offcanvasExample'
        role='button'
        aria-controls='offcanvasExample'
      >
        <box-icon name='menu'></box-icon>
      </a>
      <div
        class='offcanvas offcanvas-start sidebar'
        tabindex='-1'
        id='offcanvasExample'
        aria-labelledby='offcanvasExampleLabel'
      >
        <div class='offcanvas-header'>
          <h5 class='offcanvas-title' id='offcanvasExampleLabel'>
            Menu
          </h5>
          <button
            type='button'
            class='btn-close text-reset'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div class='offcanvas-body'>
          <div>Welcome To Slang Stan</div>
          <p></p>
          <div class='list-group'>
            <Link to='/'>
              <div class='list-group-item list-group-item-action d-flex align-items-center'>
                <box-icon name='home'></box-icon>Home
              </div>
            </Link>
            <li class='list-group-item list-group-item-action d-flex align-items-center'>
              <box-icon name='user-pin'></box-icon>My Page
            </li>
            <Link to='/list'>
              <li class='list-group-item list-group-item-action d-flex align-items-center'>
                <box-icon name='happy-heart-eyes'></box-icon>View Slangs
              </li>
            </Link>
            <li class='list-group-item list-group-item-action d-flex align-items-center'>
              <box-icon name='add-to-queue'></box-icon>Update Slangs
            </li>
            <Link to='/checkup'>
              <li class='list-group-item list-group-item-action d-flex align-items-center'>
                <box-icon name='message-alt-check'></box-icon>Chekup
              </li>
            </Link>
            <li class='list-group-item list-group-item-action d-flex align-items-center'>
              <box-icon name='pie-chart-alt-2'></box-icon>Analysis
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sider;
