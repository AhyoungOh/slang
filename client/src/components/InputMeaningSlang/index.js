import './style.scss';
import Input from './Input/input';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import useApiCall from '../../hooks/useApiCall';
import { useEffect } from 'react';
import Sider from '../Sider';

function InputMeaningSlang({ data = null }) {
  console.log('InputMeaningSlang');
  const [inputWord, setInputWord] = useState(data?.word ?? '');
  // || 는 앞에 falsy 값 (false로 간주되는 값 (0, false, null, undefined) 이 왔을 때 뒤에 값을 사용)
  // ??(null 병합 연산자) 는 앞에 null, undefined 일 때
  const [inputMeaning, setInputMeaning] = useState(data?.meaning ?? '');
  const [loading, newdata, error, fetchData] = useApiCall(
    `${process.env.REACT_APP_API_SERVER}/api/update`,
    'post',
    { inputWord, inputMeaning },
    false
  );

  useEffect(() => {
    setInputWord(data?.word ?? '');
  }, [data]); // selectedCategory가 바뀌었을 때 inputValue를 update해줌
  useEffect(() => {
    setInputMeaning(data?.meaning ?? '');
  }, [data]);

  const addData = async () => {
    fetchData();
  };
  console.dir('error', error);
  return (
    <div className='login-page'>
      <Form>
        <Form.Group className='name'>
          {/* <Form.Label>Input the Slang</Form.Label> */}
          <Input
            title={'Input the Slang'}
            value={inputWord}
            setValue={setInputWord}
            onChange={(e) => {
              setInputWord(e.target.value);
            }}
          />
        </Form.Group>
        <p></p>
        <Form.Group className='name'>
          {/* <Form.Label>Meaning of the Slang</Form.Label> */}
          {/* <Form.Control type="slang_meaning" placeholder="excellent, cool." /> */}
          <Input
            title={'Meaning of the Slang'}
            value={inputMeaning}
            setValue={setInputMeaning}
            onChange={(e) => {
              setInputMeaning(e.target.value);
            }}
          />
        </Form.Group>
        <p></p>
        {error && <div>{JSON.stringify(error.response.data.error)}</div>}
        <Button variant='secondary' onClick={addData}>
          Upload
        </Button>
      </Form>
      <Sider />
    </div>
  );
}

export default InputMeaningSlang;
