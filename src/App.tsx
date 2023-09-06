import React, { useState } from 'react';
import './App.css';
import Word from './Letter';

type AnswerType = {
  answer: string
  enabled: boolean;
}

interface AnswerProps {
  answer: AnswerProps
}



function App() {
  const [letter, setLetter] = useState([]);
  


  return (
    <>
    <Word answer='beast' enabled={true} />
    <Word answer='beast' enabled={false}/>
    <Word answer='beast' enabled={false}/>
    <Word answer='beast' enabled={false}/>
    <Word answer='beast' enabled={false}/>

    </>
    
  );
}

export default App;
