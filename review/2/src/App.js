import { useState, useRef } from 'react'
import GuessResultType from './GuessResultType';
import './App.css'
import { guess, startGame, restart } from './axios'

function App() {
  const [hasStarted, setHasStarted] = useState(false)
  const [hasWon, setHasWon] = useState(false)
  const [number, setNumber] = useState('')
  const [status, setStatus] = useState('')
  const input = useRef();

  async function handleInputKeyUp(e) {
    if (isEnter(e)) {
      await submit();
    }
  }

  async function submit() {
    if (!number) return;
    const { result } = await guess(number);

    switch (result) {
      case GuessResultType.Equal:
        setHasWon(true);
        break;
      case GuessResultType.Bigger:
        setStatus(`It's not ${number}, try a bigger number?`);
        break;
      case GuessResultType.Smaller:
        setStatus(`It's not ${number}, try a smaller number?`);
        break;
      default:
        break;
    }

    if (result !== GuessResultType.Equal) {
      input.current && (input.current.value = '');
      setNumber(null);
    }
  }

  const startMenu = (
    <div>
      <button
        onClick={async () => {
          await startGame()
          setHasStarted(true)
        }}
      >
        start game
      </button>
    </div>
  )

  const game = (
    <div>
      {hasWon ? (
        <>
          <p>you won! the number was {number}.</p>
          <button
            onClick={async () => {
              await restart()

              setHasWon(false)
              setStatus('')
              setNumber('')
            }}
          >
            restart
          </button>
        </>
      ) : (
          <>
            <p>Guess a number between 1 to 100</p>
            <input
              ref={input}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onKeyUp={handleInputKeyUp}
            ></input>
            <button
              // TODO: use async/await to call guess(number),
              // process the response to set the proper state values
              onClick={submit}
              disabled={!number}
            >
              guess!
          </button>
            <p>{status}</p>
          </>
        )}
    </div>
  )

  return <div className="App">{hasStarted ? game : startMenu}</div>
}

export default App

/**
 * Util
 */

function isEnter(e) {
  if (e.key === 'Enter') {
    return true;
  }
  else if (e.keyCode === 13) {
    return true;
  }
  return false;
}