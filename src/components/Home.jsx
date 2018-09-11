import React from "react"
import {connect} from "react-redux"
import {changeTab} from "../actions.js"
import {SINGLE,MULTI} from "../constants.js"
import style from "../scss/Home.scss"

export const Home = ({tabs,changeTab}) =>(
	<div className = "home">
	{tabs.map((tab,index) => {
		let text
		if (tab == MULTI){
			text = "Play With Friend"
		}
		else if (tab == SINGLE){
			text = "Play Against AI"
		}
		else{
			text = "Play Online"
		}
		return (
			<button className = "menu" key = {index} onClick = {() => changeTab(tab)}>{text}</button>
		)
	})}
	</div>
)

const mapStateToProps = state => (
	{
		tabs: state.tabs
	}
)

const mapDisPatchToProps = dispatch => (
	{
		changeTab: tab => changeTab({
			dispatch: dispatch,
			tab: tab,
		})
	}
)

export const HomeContainer = connect(mapStateToProps,mapDisPatchToProps)(Home)