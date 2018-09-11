import React from "react"
import {connect} from "react-redux"
import {SINGLE} from "../constants.js"
import {changeAi} from "../actions.js"
import style from "../scss/Easy.scss"

export const Easy = ({easy,onClick}) => (
	<div className="easy">
	<button className={`easy-btn ${easy ? "easy-btn-active" : " "}`} onClick={() => onClick(true)}>Easy</button>
	<button className={`easy-btn ${!easy ? "easy-btn-active" : " "}`} onClick={() => onClick(false)}>Hard</button>
	</div>
)

const mapStateToProps = state => (
	{
		easy: state[SINGLE].easy
	}
)

const mapDispatchToProps = dispatch => (
	{
		onClick: easy => changeAi({dispatch:dispatch,easy:easy})
	}
)


export const EasyContainer = connect(mapStateToProps,mapDispatchToProps)(Easy)