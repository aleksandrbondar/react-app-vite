import { useState } from 'react';
import './Input.css';

interface InputProps {
  type: "text" | "textarea" | "email" | "number" | "password" | "search" | "tel" | "url" | undefined
  placeholder?: string
}
function Input(props: InputProps): JSX.Element {
  const { type, placeholder } = props
  const [inputText, setInputText] = useState('');

  return (
    <div className='input'>
      <input className='input-text' type={type} placeholder={placeholder} value={inputText} onChange={(event) => setInputText(event.target.value)} />
      <p className='text'>{inputText.length > 0 ? `Навіщо писати: ${inputText}?` : `Напиши щось там`}</p>
    </div>
  );
}

export default Input;
