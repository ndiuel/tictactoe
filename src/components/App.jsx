import React from "react"
import {Tab,TabContainer} from "./Tab.jsx"
import {Title} from "./Title.jsx"
import {HOME,SINGLE,MULTI} from "../constants.js"
import {choice} from "../tictactoe.js"
import style from "../scss/App.scss"

export default () => (
	<React.Fragment>
	<Title/>
	<TabContainer/>
	</React.Fragment>
)