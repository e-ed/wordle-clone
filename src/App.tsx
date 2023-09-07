import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import {Word} from './Word';





function App() {
  let newLetters: string = ""
  let test = "";
  const [letter, setLetter] = useState<string>("");


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }
 
  
  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const newLetter = e.key;
    setLetter((letter) => letter + newLetter);
    console.log("letter =" + letter)
    //console.log(newLetter)
    //console.log("state = " + newLetters)
    

  }
  


  return (
    <>
    <Word handleChange={handleInput} inputState={letter} answer='beast' enabled={true} />
    <Word handleChange={handleInput} inputState={letter} answer='beast' enabled={false}/>
    <Word handleChange={handleInput} inputState={letter} answer='beast' enabled={false}/>
    <Word handleChange={handleInput} inputState={letter} answer='beast' enabled={false}/>
    <Word handleChange={handleInput} inputState={letter} answer='beast' enabled={false}/>

    </>
    
  );
}

export default App;
