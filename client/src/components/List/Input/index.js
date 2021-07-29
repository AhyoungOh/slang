import './style.scss';

function Input({ word, meaning, inputType = 'text' }) {
  return (
    <div className='input'>
      <div> {word}: </div>
      <div> {meaning}: </div>
      <input type={inputType} />
    </div>
  );
}

export default Input;
