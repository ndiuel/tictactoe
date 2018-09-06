import React from "react"
import style from "../scss/Score.scss"

export const Score = ({maxName,maxScore,minName,minScore}) =>(
    <div className="score">
        <p>{maxName}</p>
        <p>{maxScore}</p>
        <p>vs</p>
        <p>{minName}</p>
        <p>{minScore}</p>
    </div>
)
