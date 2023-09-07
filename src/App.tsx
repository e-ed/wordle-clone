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
    if (!newLetter.match(/^[0-9a-zA-Z]+$/)) return;

    if (e.key == 'Backspace') {
      newLetter = guess.currentGuess.slice(0, -1);
      setGuess({...guess, currentGuess: newLetter});
      return;
    }


    if(e.key == 'Enter') {
      if (guess.currentGuess.length < 5) return;
      const oldGuesses: string[] = guess.previousGuesses;
      oldGuesses.push(guess.currentGuess);
      setGuess({currentGuess: "", previousGuesses: oldGuesses})
      console.log(guess)

      switch(guess.previousGuesses.length) {
        case 1:
          console.log(1);
          break;
        case 2:
          console.log(2);
          break;
      }

    }

    if (newLetter.length > 1) return;

    

    if (guess.currentGuess.length == 5) return;

    setGuess({...guess, currentGuess: guess.currentGuess + newLetter})

    console.log("letter =" + guess.currentGuess)

  }



  return (
    <>
     <input onKeyDown={(e) => handleInput(e)} autoFocus maxLength={5} type='text'/>
    
    <Word inputState={guess.previousGuesses.length == 0? guess.currentGuess : guess.previousGuesses[0]} answer='beast' enabled={true} />
   
  
 
    <Word inputState={guess.previousGuesses.length == 1? guess.currentGuess : guess.previousGuesses[0]} answer='beast' enabled={false} />
    

   
    <Word inputState={guess.previousGuesses.length == 2? guess.currentGuess : guess.previousGuesses[0]} answer='beast' enabled={false} />
    

   
    <Word  inputState={guess.previousGuesses.length == 3? guess.currentGuess : guess.previousGuesses[0]} answer='beast' enabled={false} />
    

   
    <Word inputState={guess.previousGuesses.length == 4? guess.currentGuess : guess.previousGuesses[0]} answer='beast' enabled={false} />
    
 


    </>
    
  );
}

export default App;
