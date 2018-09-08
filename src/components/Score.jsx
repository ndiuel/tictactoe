import React from "react"
import {connect} from "react-redux"
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

const mapStateToProps = state => {
    let game = state.currentTab().game
    return {
        maxName: game.players.max.name,
        minName: game.players.min.name,
        minScore: game.players.min.score,
        maxScore: game.players.max.score
    }
}

export const ScoreContainer = connect(mapStateToProps)(Score)