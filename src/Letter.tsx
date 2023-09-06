import React, { FC, useRef, useState } from 'react';

interface AnswerProps {
  answer: string
}



const Word: FC<AnswerProps> = (props): JSX.Element => {

  const [letter, setLetter] = useState<string[]>([]);
  const first = useRef<HTMLInputElement>(null);
  const second = useRef<HTMLInputElement>(null);
  const third = useRef<HTMLInputElement>(null);
  const fourth = useRef<HTMLInputElement>(null);
  const fifth = useRef<HTMLInputElement>(null);

  async function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    await new Promise(f => setTimeout(f, 0.01));
    console.log(e.key);
    const newLetter = e.key;
    setLetter([...letter, newLetter]);
    console.log(letter);
    const focusObj = {
      1: first, 
      2: second, 
      3: third, 
      4: fourth, 
      5: fifth
    }
    const event = e.target as HTMLInputElement;
  

    switch(event.name) {
      case '1':
        second.current?.focus();
        break;
      case '2':
        third.current?.focus();
        break;
      case '3':
        fourth.current?.focus();
        break;
      case '4':
        fifth.current?.focus();
        break;
      default:
        type ObjectKey = keyof typeof focusObj;
        let v = parseInt(e.key) as ObjectKey;
        //console.log(focusObj[v]);
        //console.log(v);
        break;
    }
  }



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(letter);

    letter.forEach((l) => {
      if (first.current?.value == l) {
        console.log('yes');
      }
    });
    
  }

  return (
    <div className='flex-container'>

      <form onSubmit={handleSubmit}>

      <input onKeyDown={(e) => handleKeyDown(e)} name='1' ref={first} className='letter' maxLength={1} /> 
      <input onKeyDown={(e) => handleKeyDown(e)} name='2' ref={second} className='letter' maxLength={1} /> 
      <input onKeyDown={(e) => handleKeyDown(e)} name='3' ref={third} className='letter' maxLength={1} /> 
      <input onKeyDown={(e) => handleKeyDown(e)} name='4' ref={fourth} className='letter' maxLength={1} /> 
      <input onKeyDown={(e) => handleKeyDown(e)} name='5' ref={fifth} className='letter' maxLength={1} /> 
      <button type='submit'></button>
      </form>

    </div>
  );
}
export default Word;