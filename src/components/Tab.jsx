import React from "react"
import {connect} from "react-redux"
import {Board,BoardContainer} from "./Board.jsx"
import {Home,HomeContainer} from "./Home.jsx"
import {Score,ScoreContainer} from "./Score.jsx"
import {GameControl,GameControlContainer} from "./GameControl.jsx"
import {Easy,EasyContainer} from "./Easy.jsx"
import {Message, MessageContainer} from "./Message.jsx"
import {TabControl,TabControlContainer} from "./TabControl.jsx"
import {createBoard,move,checkwin} from "../tictactoe.js"
import {SINGLE,MULTI,HOME,tabs} from "../constants.js"
import style from "../scss/Tab.scss"

export const Tab = ({currentTab}) => {
	let component
	if (currentTab == HOME){
		component = <HomeContainer/>
	}
	else if (currentTab == MULTI){
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

const mapStateToProps = state => (
	{
		currentTab: state.current
	}
)

export const TabContainer = connect(mapStateToProps)(Tab)

export const MULTITAB = () => (
	<React.Fragment>
	<TabControlContainer/>
	<GameTab/>
	</React.Fragment>	
)

export const SINGLETAB = () => (
	<React.Fragment>
	<TabControlContainer/>
	<EasyContainer/>
	<GameTab/>
	</React.Fragment>
)

export const GameTab = () => (
	<React.Fragment>
	<MessageContainer/>
	<BoardContainer/>
	<ScoreContainer/>
	<GameControlContainer/>	
	</React.Fragment>
)