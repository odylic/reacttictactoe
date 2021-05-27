export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // for each possible combination of lines
  for (let i = 0; i < lines.length; i++) {
    // destructured array, a,b,c is each of lines[i]
    const [a, b, c] = lines[i];
    // if squares[0] && square[0] === squares[1] && squares[0] === squares[2]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // return squares[0] which is X or O?
      return squares[a];
    }
  }
  return null;
}
