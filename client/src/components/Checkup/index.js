import './style.scss';
import useApiCall from '../../hooks/useApiCall';
import axios from 'axios';

function Checkup() {
  const [loading, testData, error, fetchData] = useApiCall(
    `${process.env.REACT_APP_API_SERVER}/api/dictionary`
  );
  if (testData === null) {
    return <></>;
  }
  if (loading === true) {
    return <div>loading</div>;
  }
  if (error !== null) {
    return <div>Error</div>;
  }
  console.log('testdata', testData);
  const randomIdx = Math.floor(Math.random() * testData.length);
  // console.log('randomidx', randomIdx);
  const randomslang = testData[randomIdx];
  return (
    <div class='container mt-sm-5 my-1'>
      <div class='question ml-sm-5 pl-sm-5 pt-2'>
        <div class='py-2 h5'>
          <b>Q. Type the Meaning Below</b>
        </div>
        <div className='word'>{randomslang.word}</div>
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
            // onClick={}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default Checkup;
