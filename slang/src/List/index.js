// import { DropdownButton, Dropdown } from 'react-bootstrap';
// import 'react-dropdown/style.css';

const options = ['slang1', 'slang2', 'slang3'];

function List() {
  // return <Dropdown placeholderClassName='myPlaceholderClassName'></Dropdown>;
  const optionComponents = options.map((option) => {
    return (
      <li>
        <a class='dropdown-item' href='#'>
          {option}
        </a>
      </li>
    );
  });
  return (
    <div class='dropdown'>
      <button
        class='btn btn-secondary dropdown-toggle'
        type='button'
        id='dropdownMenuButton1'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        Dropdown button
      </button>
      <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
        {optionComponents}
      </ul>
    </div>
  );
}

export default List;
