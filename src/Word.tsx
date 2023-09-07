import React, { useEffect, useRef, useState } from 'react';

export function Word({answer, enabled, inputState, handleChange} : {answer: string, enabled?: boolean, inputState: string, handleChange: (e: React.KeyboardEvent<HTMLInputElement>) => void}) {
  
  return (
    <div className='flex-container'>

      <input onKeyDown={(e) => handleChange(e)}  autoFocus maxLength={5} type='text'></input>

      <div className='letter' >{inputState[0]} </div> 
      <div className='letter' >{inputState[1]} </div> 
      <div className='letter' >{inputState[2]} </div> 
      <div className='letter' >{inputState[3]} </div> 
      <div className='letter' >{inputState[4]} </div> 

      <button type='submit'></button>


    </div>
  );
}
