import './style.scss';

import axios from 'axios';

function Checkup() {
  // const [payload, setPayload] = useState('');
  // const [error, setError] = useState('');
  // const [loading, setLoading] = useState('');
  const payload = [
    {
      _id: 'abc',
      word: 'testword111',
      meaning: 'testmeaning',
      correctUserIds: ['testuserIds'],
    },
    {
      _id: 'abc',
      word: 'testword222',
      meaning: 'testmeaning',
      correctUserIds: ['testuserIds'],
    },
    {
      _id: 'abc',
      word: 'testword333',
      meaning: 'testmeaning',
      correctUserIds: ['testuserIds'],
    },
    {
      _id: 'abc',
      word: 'testword444',
      meaning: 'testmeaning',
      correctUserIds: ['testuserIds'],
    },
    {
      _id: 'abc',
      word: 'testword555',
      meaning: 'testmeaning',
      correctUserIds: ['testuserIds'],
    },
    {
      _id: 'abc',
      word: 'testword666',
      meaning: 'testmeaning',
      correctUserIds: ['testuserIds'],
    },
  ];
  const randomIdx = Math.floor(Math.random() * payload.length);
  // console.log('randomidx', randomIdx);
  const randomslang = payload[randomIdx];
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
