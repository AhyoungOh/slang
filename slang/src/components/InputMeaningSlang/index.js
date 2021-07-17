import './style.scss';
import Input from './Input/input';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function InputMeaningSlang() {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const createdictData = async () => {
    // console.log("작성하기 버튼이 클릭됐을 때 ");
    await axios.post('http://localhost:4000/api/dictionary', {
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
