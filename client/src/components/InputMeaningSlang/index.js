import './style.scss';
import Input from './Input/input';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import useApiCall from '../../hooks/useApiCall';
import { useEffect } from 'react';

function InputMeaningSlang({ data = null }) {
  const [loading, newdata, error, fetchData] = useApiCall(
    `${process.env.REACT_APP_API_SERVER}/api/dictionary`
  );
  const [inputWord, setInputWord] = useState(data?.word ?? '');
  // || 는 앞에 falsy 값 (false로 간주되는 값 (0, false, null, undefined) 이 왔을 때 뒤에 값을 사용)
  // ??(null 병합 연산자) 는 앞에 null, undefined 일 때
  useEffect(() => {
    setInputWord(data?.word ?? '');
  }, [data]); // selectedCategory가 바뀌었을 때 inputValue를 update해줌
  const [inputMeaning, setInputMeaning] = useState(data?.meaning ?? '');
  useEffect(() => {
    setInputMeaning(data?.meaning ?? '');
  }, [data]);
  if (!newdata) {
    return <></>;
  }

  if (loading) {
    return <>로딩중</>;
  }

  if (error) {
    return <>{error}</>;
  }

  const addData = async () => {
    await axios.post(`${process.env.REACT_APP_API_SERVER}/api/dictionary`, {
      word: inputWord,
      meaning: inputMeaning,
    });
    fetchData();
  };
  console.log('word', inputWord);
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
        <Button variant='secondary' onClick={addData}>
          Upload
        </Button>
      </Form>
    </div>
  );
}

export default InputMeaningSlang;
