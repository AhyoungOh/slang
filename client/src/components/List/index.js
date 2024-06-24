import './style.scss';
import React, { useState } from 'react';
import axios from 'axios';
import Sider from '../Sider';
import useApiCall from '../../hooks/useApiCall';
import { useHistory } from 'react-router-dom';
import InputMeaningSlang from '../InputMeaningSlang';
import { Link } from 'react-router-dom';

function List({ data }) {
  const [word, setWord] = useState(data?.word || '');
  const [meaning, setMeaning] = useState(data?.meaning || '');
  const history = useHistory();
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

  const updateData = async () => {
    await axios.put(`${process.env.REACT_APP_API_SERVER}/list`, {
      _id: data._id,
      word,
      meaning,
    });
    fetchData();
    history.push('/');
  };

  const deleteData = async () => {
    await axios.delete(`${process.env.REACT_APP_API_SERVER}/list/${data._id}`);
    fetchData();
    history.push('/');
  };

  const dataList = testData.map((wordData) => {
    return (
      <button
        class='btn btn-secondary'
        type='button'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        {wordData.word}
      </button>
    );
  });
  return (
    <div className='slang-list'>
      <div class='d-grid gap-2 col-6 mx-auto'>{dataList}</div>
      <Link to='/dictionary'>
        <button className='button'>Plus</button>
      </Link>
      <div class='modal' id='exampleModal' tabindex='-1'>
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title'>
                <div class='title'>Edit the slang</div>
              </h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div class='modal-body'>
              <div class='input-group'>
                <span class='input-group-text'>Slang and meaning</span>
                <input
                  type='text'
                  aria-label='slang'
                  class='form-control'
                  title={'slang'}
                  value={word}
                  // setValue={setTitle}
                />
                <input
                  type='text'
                  aria-label='meaning'
                  class='form-control'
                  title={'meaning'}
                  value={meaning}
                />
              </div>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-secondary'
                onClick={updateData}
              >
                Save changes
              </button>
              <button
                type='button'
                class='btn btn-secondary'
                onClick={deleteData}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <Sider />
    </div>
  );
}

export default List;
