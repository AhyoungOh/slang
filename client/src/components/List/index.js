import './style.scss';
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function List({ data, setVisible, fetchData }) {
  const [word, setWord] = useState(data?.word || '');
  const [meaning, setMeaning] = useState(data?.meaning || '');
  const history = useHistory();

  const createData = async () => {
    await axios.post(`${process.env.REACT_APP_API_SERVER}/list`, {
      word,
      meaning,
    });
    setVisible(false);
    fetchData();
  };

  const updateData = async () => {
    await axios.put(`${process.env.REACT_APP_API_SERVER}/list`, {
      _id: data._id,
      word,
      meaning,
    });
    setVisible(false);
    fetchData();
    history.push('/');
  };

  const deleteData = async () => {
    await axios.delete(`${process.env.REACT_APP_API_SERVER}/list/${data._id}`);
    setVisible(false);
    fetchData();
    history.push('/');
  };

  if (data === null) {
    return (
      <div className='slang-list'>
        <div class='d-grid gap-2 col-6 mx-auto'>
          <button
            class='btn btn-primary'
            type='button'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            Slang1
          </button>
        </div>
        <div class='modal' id='exampleModal' tabindex='-1'>
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h5 class='modal-title'>Modal title</h5>
                <button
                  type='button'
                  class='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div class='modal-body'>
                <p>Modal body text goes here.</p>
              </div>
              <div class='modal-footer'>
                <button
                  type='button'
                  class='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
                <button type='button' class='btn btn-primary'>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return;
  }
}

export default List;
