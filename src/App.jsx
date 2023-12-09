import { useState } from 'react';
import { useMemo } from 'react';

// NON RECURSIVE METHOD, USING BUILT IN JS FUNCTIONS

// Empty text input will result positive result


function App() {

  const [word, setWord] = useState("");
  const PalinCheck = useMemo(() => {
    return word === word.split("").reverse().join("");
  }, [word]);

  return (
    <>
    <div className='container'>
    <div className='box'>
      <form>
        <div >
          <label> Type in Word -->  </label>
          <input className='entry' value={word} onChange={(e) => setWord(e.target.value)} />
        </div>
      </form>
      <div className='result'>Is this word a palindome?</div>
      <div className='answer'>
       {PalinCheck ? "Yes" : "No"}
       </div>
      </div>
      </div>

    </>
  )
}

export default App

