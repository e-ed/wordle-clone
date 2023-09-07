import React, { forwardRef, useRef } from 'react';

export function Word({ answer, enabled, inputState }: { answer: string; enabled?: boolean, inputState: string})  {
 
    

  return (
    <div className='flex-container'>

      <div className='letter' >
        {enabled ? inputState[0] : null}
      </div>

      <div className='letter' >
        {enabled ? inputState[1] : null}
      </div>

      <div className='letter' >
        {enabled ? inputState[2] : null}
      </div>

      <div className='letter' >
        {enabled ? inputState[3] : null}
      </div>

      <div className='letter'>
        {enabled ? inputState[4] : null}
      </div>
    </div>
  );
};

export default Word;
