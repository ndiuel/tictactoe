import React from "react"
import {render} from "react-dom"
import {TabControl} from "./components/TabControl.jsx"
import {GameControl} from "./components/GameControl.jsx"
import {Board} from "./components/Board.jsx"
import {Score} from "./components/Score.jsx"
import {Message} from "./components/Message.jsx"
import {createBoard,move,checkwin} from "./tictactoe.js"
import style from "./scss/App.scss"


let el = document.getElementById("app")

let board = createBoard({})
move(board,0,"X")
move(board,1,"X")
move(board,2,"X")
move(board,3,"O")
checkwin(board.cells,"X")
/*render(<Board 
	board = {board}
	cellClick = {(i) => console.log(i)}
	/>,document.getElementById('app')
)*/
//render(<Message message = "My Turn"/>,el)
/*render(<Score 
	maxName = "Samuel"
	maxScore = {0}
	minName = "Aniekan"
	minScore = {0}
	/>,el)*/

//render(<GameControl/>,el)
//render(<TabControl tabs = {["SINGLE","MULTI","ONLINE"]} currentTab = "MULTI"/>,el)

const Game = () => (
	<React.Fragment>
	<h2 className = "title">tic tac toe </h2>
	<TabControl tabs = {["SINGLE","MULTI","ONLINE"]} currentTab = "MULTI"/>
	<Message message = "My Turn"/>
	<Board 
	board = {board}
	cellClick = {(i) => console.log(i)}
	/>
	<Score 
	maxName = "Samuel"
	maxScore = {0}
	minName = "Aniekan"
	minScore = {0}
	/>
	<GameControl/>
	</React.Fragment>
)

render(<Game/>,el)