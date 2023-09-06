import React, { FC, useEffect, useRef, useState } from 'react';

interface AnswerProps {
  answer: string
  enabled: boolean
}

interface KeyboardEvent {
  key: string;
}


const Word: FC<AnswerProps> = ({answer, enabled}): JSX.Element => {
  let newLetters: string = ""
  let test = "";
  const [letter, setLetter] = useState<string>("");
  const [state, setState] = useState("");
  const ref = useRef(null);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    //console.log(e.target.value);
  
    let newLetter = e.target.value;
    newLetters += newLetter;
    setLetter(newLetters);
    console.log(letter);
   

  }

  useEffect(() => {
    document.addEventListener("keydown", handleInput)
  })

  const handleInput = (e: KeyboardEvent) => {
    let newLetter = e.key;
    test += newLetter;
    setState(test);
    console.log(state)
    //console.log(newLetter)
    //console.log("state = " + newLetters)
    

  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(letter);

    
    
  }



  return (
    <div className='flex-container'>

      <form onSubmit={handleSubmit}>
        
      <input value={state} ref={ref} autoFocus maxLength={5} onChange={(e) => handleChange(e)} type='text'></input>

      <div className='letter' > {enabled == false ? null : letter[0]}</div> 
      <div className='letter' >{enabled == false ? null : letter[1]}</div> 
      <div className='letter' >{enabled == false ? null : letter[2]}</div> 
      <div className='letter' >{enabled == false ? null : letter[3]}</div> 
      <div className='letter' >{enabled == false ? null : letter[4]}</div> 
      <button type='submit'></button>
      </form>

    </div>
  );
}
export default Word;