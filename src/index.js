import React from "react"
import ReactDOM from "react-dom"
import {Board} from "./components/Board.jsx"
import {createBoard} from "./tictactoe.js"

let board = createBoard({})
ReactDOM.render(<Board 
	board = {board}
	cellClick = {(i) => console.log(i)}
	/>,document.getElementById('app'))
