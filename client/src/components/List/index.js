import './style.scss';
import React, { useState } from 'react';
import axios from 'axios';
import InputMeaningSlang from '../InputMeaningSlang';
import { useHistory } from 'react-router-dom';

function List({ data, setVisible, fetchData }) {
  const [word, setWord] = useState(data?.word || '');
  const [meaning, setMeaning] = useState(data?.meaning || '');
  const history = useHistory();

  const updateData = async () => {
    await axios.put(`${process.env.REACT_APP_API_SERVER}/list`, {
      _id: data._id,
      word,
      meaning,
    });
    // setVisible(false);
    fetchData();
    history.push('/');
  };

  const deleteData = async () => {
    await axios.delete(`${process.env.REACT_APP_API_SERVER}/list/${data._id}`);
    // setVisible(false);
    fetchData();
    history.push('/');
  };

  if (data === null) {
    return <InputMeaningSlang> {(data, word, meaning)}</InputMeaningSlang>;
  } else {
    return (
      <div className='slang-list'>
        <div class='d-grid gap-2 col-6 mx-auto'>
          <button
            class='btn btn-secondary'
            type='button'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            Slang
          </button>
        </div>
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
      </div>
    );
  }
}

export default List;
