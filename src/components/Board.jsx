import React from "react"
import {EMPTY_SPACE} from "../tictactoe.js"
import style from "../scss/Board.scss"

export const Cell = ({cell,onClick}) => {
    let className = cell.value != " " ? "" : "empty"
    let textClass = cell.won ? "won" : " "
    return (
      <td className = {`cell ${className}`} onClick = {onClick}><p className = {textClass}> {cell.value} </p></td>
    )
}
export const Board = ({board,cellClick}) => {
    let rows = []
    for (let i = 0; i < 3; i++){
        let cells = []
        for (let j = 0; j < 3; j++){
            let index = 3 * i + j
            cells.push(<Cell 
                key = {index} 
                onClick = {() => cellClick(index)} 
                cell = {board.cells[index]}
                />
            )
        }
        rows.push(<tr key = {i}>{cells}</tr>)
    }
    return (
        <table className = "board">
        <tbody>
        <React.Fragment>
            {rows}
        </React.Fragment>
        </tbody>
        </table>
    )
}