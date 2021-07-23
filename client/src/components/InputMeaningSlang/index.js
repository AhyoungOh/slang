import './style.scss';
import Input from './Input/input';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function InputMeaningSlang({ data, setVisible, fetchData }) {
  const [word, setWord] = useState(data.word || '');
  const [meaning, setMeaning] = useState(data.meaning || '');
  const createdictData = async () => {
    await axios.post(`${process.env.REACT_APP_API_SERVER}/api/dictionary`, {
      word,
      meaning,
    });
  };
  return (
    <div className='login-page'>
      <Form>
        <Form.Group className='name'>
          {/* <Form.Label>Input the Slang</Form.Label> */}
          <Input title={'Input the Slang'} setValue={setWord} />
        </Form.Group>
        <p></p>
        <Form.Group className='name'>
          {/* <Form.Label>Meaning of the Slang</Form.Label> */}
          {/* <Form.Control type="slang_meaning" placeholder="excellent, cool." /> */}
          <Input title={'Meaning of the Slang'} setValue={setMeaning} />
        </Form.Group>
        <p></p>
        <Button variant='primary' onClick={createdictData}>
          Upload
        </Button>
      </Form>
    </div>
  );
}

export default InputMeaningSlang;
