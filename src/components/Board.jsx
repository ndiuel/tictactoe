import React from "react"
import {connect} from "react-redux"
import {EMPTY_SPACE} from "../tictactoe.js"
import {move} from "../actions.js"
import {MULTI} from "../constants.js"
import style from "../scss/Board.scss"

export const Cell = ({cell,onClick}) => {
    let className = cell.value != " " ? "" : "empty"
    let textClass = cell.won ? "won" : " "
    return (
      <td className = {`cell ${className}`} 
      onClick = {onClick}>
      <p className = {textClass}> 
      {cell.value} </p>
      </td>
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
        rows.push(<tr key = {i} >{cells}</tr>)
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

const mapStateToProps = state => (
    {
        tab: state.current,
        game: state.currentTab().game
    }
)

const mapDispatchToProps = dispatch => (
    {
        dispatch: dispatch
    }

)
const mergeProps = (stateProps,dispatchProps) => (
    {
        cellClick: index => move({
            dispatch:dispatchProps. dispatch,
            index: index,
            tab: stateProps.tab,
            value: stateProps.tab ==  MULTI ? stateProps.game.currentPlayer().value : stateProps.game.players.max.value
        }),
        board: stateProps.game.board
    }
)

export const BoardContainer = connect(mapStateToProps,mapDispatchToProps,mergeProps)(Board)

