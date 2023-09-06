import React, { FC, useEffect, useRef, useState } from 'react';

interface AnswerProps {
  answer: string
  enabled: boolean
}



const Word: FC<AnswerProps> = ({answer, enabled}): JSX.Element => {
  let newLetters: string = ""
  const [letter, setLetter] = useState<string>("");

   const handleKeyDown = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    //console.log(e.target.value);
  
    const newLetter = e.target.value;
    newLetters += newLetter;
    setLetter(newLetters);
    console.log(letter);
   

  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(letter);

    
    
  }



  return (
    <div className='flex-container'>

      <form onSubmit={handleSubmit}>
        
      <input autoFocus maxLength={5} onChange={(e) => handleKeyDown(e)} type='text'></input>

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