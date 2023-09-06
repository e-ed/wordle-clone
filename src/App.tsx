import React, { useState } from 'react';
import './App.css';
import Word from './Letter';

interface AnswerProps {
  answer: string
}

function App() {
  const [letter, setLetter] = useState([]);
  const ANSWER: string = 'beast';


  return (
    <>
    <Word answer={ANSWER}/>
    <Word answer={ANSWER}/>
    <Word answer={ANSWER}/>
    <Word answer={ANSWER}/>
    <Word answer={ANSWER}/>

    </>
    
  );
}

export default App;
