import { useState } from "react";

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]];

export default function Gameboard({turns,onSelectSquare}) {

    let gameBoard = initialGameBoard;

    for(const turn of turns)
    {
        const {square,player} = turn;
        const {row , col} = square;
        gameBoard[row][col] = player;
    }

    // const [gameBoard,setGameBoard] = useState(initialGameBoard);
    // function handleSelectSquare(rowIndex,colIndex)
    // {
    //     setGameBoard((prevGameBorad) => {
    //         const updatedBoard = [...prevGameBorad.map((prevArray) => [...prevArray])]
    //         updatedBoard[rowIndex][colIndex] =  activePlayerSymbol;
    //         return updatedBoard;
    //     })
    //     onSelectSquare();
    // }

    return (<ol id="game-board">
        {gameBoard.map((row,rowIndex) =>
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex) => 
                        <li key={colIndex}><button onClick={() => onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button></li>
                    )}
                </ol>
            </li>
        )}
    </ol>);
}