import React, {useState} from 'react';
import Board from './Board';
import {calculateWinner} from '../helper';

export default function Game() {
  // history is array of all steps taken
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // stepNumber used as index to retrieve each step from history
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  // use helper function to calculate winner from total history
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? 'X' : 'O';

  const handleClick = (i) => {
    // history from first to stepNumber +1, not sure if it's above current
    const historyPoint = history.slice(0, stepNumber + 1);
    // current becomes history in array, copied and stepNumber
    const current = historyPoint[stepNumber];
    // copy of current history
    const squares = [...current];
    // return if won or occupied space is clicked, nothing more happens
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    // set history to all of the history before plus squares
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);
  };
 

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0)
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : `Go to Start`;
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <h1>React Tic Tac Toe - With Hooks</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History </h3>
          {renderMoves()}
        </div>
        <h3>{winner ? `Winner: ` + winner : `Next Player: ` + xO} </h3>
      </div>
    </>
  );
}


