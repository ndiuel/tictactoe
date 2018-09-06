import React from "react"
import style from "../scss/Home.scss"

export const Home = ({tabs}) =>(
	<div className = "home">
	{tabs.map((tab,index) => {
		let text
		if (tab == "MULTI"){
			text = "Play With Friend"
		}
		else if (tab == "SINGLE"){
			text = "Play Against AI"
		}
		else{
			text = "Play Online"
		}
		return (
			<button className = "menu" key = {index}>{text}</button>
		)
	})}
	</div>
)