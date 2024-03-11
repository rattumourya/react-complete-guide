const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]];

export default function Gameboard() {

    return (<ol id="game-board">
        {initialGameBoard.map((row,indexRow) =>
            <li key={indexRow}>
                <ol>
                    {row.map((playerSymbol,colIndex) => 
                        <li key={colIndex}><button>{playerSymbol}</button></li>
                    )}
                </ol>
            </li>
        )}
    </ol>);
}