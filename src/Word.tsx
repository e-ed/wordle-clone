export function Word({
  answer,
  answered,
  inputState,
  css,
}: {
  answer: string;
  answered: boolean;
  inputState: string;
  css: string[];
}) {
  return (
    <div className="flex-container containerLetter">
      <div className={answered ? css[0] : "letter"}>
        {inputState == undefined ? null : inputState[0]}
      </div>

      <div className={answered ? css[1] : "letter"}>
        {inputState == undefined ? null : inputState[1]}
      </div>

      <div className={answered ? css[2] : "letter"}>
        {inputState == undefined ? null : inputState[2]}
      </div>

      <div className={answered ? css[3] : "letter"}>
        {inputState == undefined ? null : inputState[3]}
      </div>

      <div className={answered ? css[4] : "letter"}>
        {inputState == undefined ? null : inputState[4]}
      </div>
    </div>
  );
}

export default Word;
