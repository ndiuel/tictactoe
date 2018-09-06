import React from "react"
import {Tab} from "./Tab.jsx"
import {Title} from "./Title.jsx"
import {SINGLE} from "../constants.js"
import style from "../scss/App.scss"

export default () => (
	<React.Fragment>
	<Title/>
	<Tab currentTab = {SINGLE}/>
	</React.Fragment>
)