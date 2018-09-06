import React from "react"
import style from "../scss/GameControl.scss"

export const GameControl = ({onRestart,onReset,onUndo}) => (
    <div className="control">
        <button className="control-btn" onClick = {onReset}>Reset</button>
        <button className="control-btn" onClick = {onUndo}>Undo</button>
        <button className="control-btn" onClick = {onRestart}>Restart</button>       
    </div>
)