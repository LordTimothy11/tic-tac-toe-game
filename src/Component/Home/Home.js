import React, { useState } from "react";
import "./Home.css";



function Home = () =>{
    const [board, setBoard] = useState(intialBoard);
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (index) => {
        const newBoard = [...board];
        if (newBoard[index] || calculateWinner(newBoard)) return;
        newBoard[index] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext)
    };

    const renderSquare = (index) => {
        return(
            <button className="square" onClick={() => handleClick(index)}>
                {board[index]}
            </button>
        );
    };

    const winner = calculateWinner(board);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return(
        <div className="game">
            <div className="game-borad">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                </div>
                <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
                </div>
            </div>
            <div className="game-info">
                <div>{status}</div>
            </div>
        </div>
    );
};

const calculateWinner = (squares) => {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for (let index = 0; index < lines.length; index++) {
        const [a, b, c] = lines[index];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }
    return null;
};

export default Home;
