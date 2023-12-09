import './App.css'
import { useState } from 'react';
import { useMemo } from 'react';

// NON RECURSIVE METHOD, USING BUILT IN JS FUNCTIONS


function App() {

  const [word, setWord] = useState("");
  const PalinCheck = useMemo(() => {
    return word === word.split("").reverse().join("");
  }, [word]);


  return (
    <>

      <form>
        <div>
          <label>Type in Word</label>
          <input value={word} onChange={(e) => setWord(e.target.value)} />
        </div>
      </form>
      <div>Is this word a palindome? {PalinCheck ? "Yes" : "No"}</div>

    </>
  )
}

export default App

