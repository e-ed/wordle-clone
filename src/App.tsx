import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Word from './Word';





function App() {
  let newLetters: string = ""

  const [guess, setGuess] = useState({
    currentGuess: "",
    previousGuesses: ([] as string[])
  });
  
  


  
 
  
  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    let newLetter = e.key.toUpperCase();

    if(e.key == 'Enter') {
      if (guess.currentGuess.length < 5) return;
      const oldGuesses: string[] = guess.previousGuesses;
      oldGuesses.push(guess.currentGuess);
      setGuess({currentGuess: "", previousGuesses: oldGuesses})
      console.log(guess)
    }

    if (e.key == 'Backspace') {
      newLetter = guess.currentGuess.slice(0, -1);
      setGuess({...guess, currentGuess: newLetter});
      return;
    }

    if (guess.currentGuess.length == 5) return;

    setGuess({...guess, currentGuess: guess.currentGuess + newLetter})

    console.log("letter =" + guess.currentGuess)

  }



  return (
    <>
     <input onKeyDown={(e) => handleInput(e)} autoFocus maxLength={5} type='text'/>
    
    <Word inputState={guess.currentGuess} answer='beast' enabled={true} />
   
  
 
    <Word inputState={guess.currentGuess} answer='beast' enabled={false} />
    

   
    <Word inputState={guess.currentGuess} answer='beast' enabled={false} />
    

   
    <Word  inputState={guess.currentGuess} answer='beast' enabled={false} />
    

   
    <Word inputState={guess.currentGuess} answer='beast' enabled={false} />
    
 


    </>
    
  );
}

export default App;
