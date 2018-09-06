import React from "react"
import {Board} from "./Board.jsx"
import {Home} from "./Home.jsx"
import {Score} from "./Score.jsx"
import {GameControl} from "./GameControl.jsx"
import {Easy} from "./Easy.jsx"
import {Message} from "./Message.jsx"
import {TabControl} from "./TabControl.jsx"
import {createBoard,move,checkwin} from "../tictactoe.js"
import {SINGLE,MULTI,HOME,tabs} from "../constants.js"
import style from "../scss/Tab.scss"

let board = createBoard({})
move(board,0,"X")
move(board,1,"X")
move(board,2,"X")
move(board,3,"O")
checkwin(board.cells,"X")
export const Tab = ({currentTab}) => {
	let component
	if (currentTab == "HOME"){
		component = <Home tabs = {tabs}/>
	}
	else if (currentTab == "MULTI"){
		component = <MULTITAB/>
	}
	else{
		component = <SINGLETAB/>
	}
	return (
		<div className="tab">
		{component}
		</div>
	)
}

export const SINGLETAB = () => (
	<React.Fragment>
	<TabControl tabs = {tabs} currentTab = {MULTI}/>
	<GameTab/>
	</React.Fragment>	
)

export const MULTITAB = () => (
	<React.Fragment>
	<TabControl tabs = {tabs} currentTab = {MULTI}/>
	<Easy/>
	<GameTab/>
	</React.Fragment>
)

export const GameTab = () => (
	<React.Fragment>
	<Message message = "My Turn"/>
	<Board board = {board} cellClick = {(i) => console.log(i)}/>
	<Score maxName = "Samuel" maxScore = {0} minName = "Aniekan" minScore = {0} />
	<GameControl/>	
	</React.Fragment>
)