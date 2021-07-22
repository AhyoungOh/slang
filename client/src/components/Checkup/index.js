import './style.scss';

function Checkup() {
  return (
    <div class='container mt-sm-5 my-1'>
      <div class='question ml-sm-5 pl-sm-5 pt-2'>
        <div class='py-2 h5'>
          <b>Q. Type the Meaning Below</b>
        </div>
        <div className='word'>Stan</div>
        <div class='input-group mb-3'>
          <input
            type='text'
            class='form-control'
            placeholder='Meaning'
            aria-label='Meaning'
            aria-describedby='button-addon2'
          />
          <button
            class='btn btn-outline-secondary'
            type='button'
            id='button-addon2'
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default Checkup;
