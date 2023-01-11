import "./App.css";
import Die from "./components/Die";
import { useState } from "react";
import confetti from "./assets/images/confetti.gif";

function App() {
  const [rolls, setRolls] = useState([1, 2, 5]);
  const [chance, setChance] = useState(1);
  const [won, setWon] = useState(false);
  const [again, setAgain] = useState(false);

  const startRolling = () => {
    if (chance === 1) {
      setAgain(false);
      let first = Math.floor(Math.random() * 6) + 1;
      setRolls([-1, rolls[1], rolls[2]]);
      setTimeout(() => {
        setRolls([first, rolls[1], rolls[2]]);
      }, 500);
      setChance(2);
    }
    if (chance === 2) {
      let second = Math.floor(Math.random() * 6) + 1;
      let third = Math.floor(Math.random() * 6) + 1;
      setRolls([rolls[0], -1, -1]);
      setTimeout(() => {
        setRolls([rolls[0], second, third]);
        if (rolls[0] === second && second === third) {
          setWon(true);
        } else {
          setAgain(true);
        }
      }, 500);
      setChance(1);
    }
  };

  return (
    <div className="App w-screen h-screen bg-slate-300 flex flex-col justify-center items-center">
      {won && (
        <img
          src={confetti}
          className="absolute h-full w-full max-h-full max-w-full"
        />
      )}
      <div className="w-full max-w-md flex justify-around items-center">
        <Die number={rolls[0]} />
        <Die number={rolls[1]} />
        <Die number={rolls[2]} />
      </div>
      {again && (
        <span className="text-red-500 font-bold mt-4">Try Again !!</span>
      )}
      <button
        className="w-max px-4 h-8 bg-black text-white rounded-md shadow-md mt-16"
        onClick={startRolling}>
        Roll the dice
      </button>
    </div>
  );
}

export default App;
