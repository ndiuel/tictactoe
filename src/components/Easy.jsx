import React from "react"
import style from "../scss/Easy.scss"

export const Easy = ({easy = true}) => (
	<div className="easy">
		<button className={`easy-btn ${easy ? "easy-btn-active" : " "}`}>Easy</button>
		<button className={`easy-btn ${!easy ? "easy-btn-active" : " "}`}>Hard</button>
	</div>
)