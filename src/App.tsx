import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Word from './Word';



 




function App() {
  const wordleAnswer: string = 'BEAST';
  let newLetters: string = ""

  const [guess, setGuess] = useState<{currentGuess: string, previousGuesses: string[]}>({
    currentGuess: "",
    previousGuesses: [] 
  });

 

  const [answered, setAnswered] = useState<boolean[]>([false, false, false, false, false, false]);
  const [css, setCss] = useState<Array<Array<string>>>([]);

  let answerLetters: string[] = wordleAnswer.split("")

  let checkLetters = (w1:string[], w2:string[]) => {
    let a:string[] = [];

      for (let i = 0; i < 5; i++) {
        if (w1[i] == w2[i]) {
          a.push('correct');
        } else if (w2.includes(w1[i]))  {
          a.push('wrongplace');
        }
        else {
          a.push('letter');
        }
      }


    return a;
  }
  
  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    let newLetter = e.key.toUpperCase();
    if (!newLetter.match(/^[a-zA-Z]+$/)) return;

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

      let newAnswered: boolean[];

      switch(guess.previousGuesses.length) {
        case 1:
          newAnswered = [true, false, false, false, false];
          setAnswered(newAnswered);
          break;
        case 2:
          newAnswered = [true, true, false, false, false];
          setAnswered(newAnswered);
          break;
        case 3:
          newAnswered = [true, true, true, false, false];
          setAnswered(newAnswered);
          break;
        case 4:
          newAnswered = [true, true, true, true, false];
          setAnswered(newAnswered);
          break;
        case 5:
          newAnswered = [true, true, true, true, true];
          setAnswered(newAnswered);
          break;

      }
          let inputLetters = guess.currentGuess.split("");
          let newCss: Array<Array<string>> = css;
          newCss.push(checkLetters(inputLetters, answerLetters))
          setCss(newCss);
          console.log(css)

    }

    if (newLetter.length > 1) return;

    

    if (guess.currentGuess.length == 5) return;

    setGuess({...guess, currentGuess: guess.currentGuess + newLetter})

    console.log("letter =" + guess.currentGuess)

  }



  return (
    <>
     <input onKeyDown={(e) => handleInput(e)} autoFocus maxLength={5} type='text'/>
    
    <Word inputState={guess.previousGuesses.length == 0? guess.currentGuess : guess.previousGuesses[0]} answer={wordleAnswer} answered={answered[0]} css={css[0]} />
    <Word inputState={guess.previousGuesses.length == 1? guess.currentGuess : guess.previousGuesses[1]} answer={wordleAnswer} answered={answered[1]} css={css[1]} />
    <Word inputState={guess.previousGuesses.length == 2? guess.currentGuess : guess.previousGuesses[2]} answer={wordleAnswer} answered={answered[2]} css={css[2]} />
    <Word inputState={guess.previousGuesses.length == 3? guess.currentGuess : guess.previousGuesses[3]} answer={wordleAnswer} answered={answered[3]} css={css[3]} />
    <Word inputState={guess.previousGuesses.length == 4? guess.currentGuess : guess.previousGuesses[4]} answer={wordleAnswer} answered={answered[4]} css={css[4]} />
    <Word inputState={guess.previousGuesses.length == 5? guess.currentGuess : guess.previousGuesses[5]} answer={wordleAnswer} answered={answered[5]} css={css[5]} />

    
 


    </>
    
  );
}

export default App;
