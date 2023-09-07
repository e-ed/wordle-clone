import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Word from './Word';



 




function App() {

  const wordleAnswer: string = 'STARE';
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

    const letterCount = new Map();

    for (let i = 0; i < 5; i++) {
      if (!letterCount.has(w2[i])) letterCount.set(w2[i], 1);
      else letterCount.set(w2[i], letterCount.get(w2[i]) + 1);
    }

    //console.log(letterCount)


      for (let i = 0; i < 5; i++) {
        if (w1[i] == w2[i] && (letterCount.get(w1[i]) >= 1) ) {
          a.push('correct');
          letterCount.set(w1[i], letterCount.get(w1[i]) - 1);
        } else if (w2.includes(w1[i]) && (letterCount.get(w1[i]) >= 1) ){
          a.push('wrongplace');
          letterCount.set(w1[i], letterCount.get(w1[i]) - 1);
          
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
      //console.log(guess)

      let newAnswered: boolean[] = answered;

      switch(guess.previousGuesses.length) {
        case 1:
          newAnswered[0] = true;
          break;
        case 2:
          newAnswered[1] = true;
          break;
        case 3:
          newAnswered[2] = true;
          break;
        case 4:
          newAnswered[3] = true;
          break;
        case 5:
          newAnswered[4] = true;
          break;
        case 6:
          newAnswered[5] = true;
          break;
      }

          setAnswered(newAnswered);
          let inputLetters = guess.currentGuess.split("");
          let newCss: Array<Array<string>> = css;
          newCss.push(checkLetters(inputLetters, answerLetters))
          setCss(newCss);
          //console.log(css)

    }

    if (newLetter.length > 1) return;

    

    if (guess.currentGuess.length == 5) return;

    

    setGuess({...guess, currentGuess: (guess.currentGuess + newLetter)})
  
    //console.log(guess)
    //console.log("guess =" + guess.currentGuess)

  }

  useEffect(() => {
    // for some reason, this does not set state correctly
    //document.addEventListener("keydown", handleInput);

   
  }, [])

 


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
