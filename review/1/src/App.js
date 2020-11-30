import { useState } from "react";
import "./App.css";
import { guess, startGame, restart } from "./axios";

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [number, setNumber] = useState("");
  const [status, setStatus] = useState("");

  const startMenu = (
    <div>
      <button
        onClick={async () => {
          await startGame();
          setHasStarted(true);
        }}
      >
        start game
      </button>
    </div>
  );

  const game = (
    <div>
      {hasWon ? (
        <>
          <p>you won! the number was {number}.</p>
          <button
            onClick={async () => {
              await restart();

              setHasWon(false);
              setStatus("");
              setNumber("");
            }}
          >
            restart
          </button>
        </>
      ) : (
        <>
          <p>Guess a number between 0 to 99</p>
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            // I think input validation should be done on front-end
          ></input>
          <button
            // TODO (done): use async/await to call guess(number),
            // process the response to set the proper state values
            onClick={async () => {
              let res = await guess(number);
              if (res === "Well guess!") {
                setHasWon(true);
              } else {
                setStatus(res);
              }
            }}
            disabled={!number}
          >
            guess!
          </button>
          <p>{status}</p>
        </>
      )}
    </div>
  );

  return <div className="App">{hasStarted ? game : startMenu}</div>;
}

export default App;
