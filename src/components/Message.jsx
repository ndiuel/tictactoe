import React from "react"
import {connect} from "react-redux"
import style from "../scss/Message.scss"

export const Message = ({message}) => (
    <p className = "message">{message}</p>
)

const mapStateToProps = state => (
    {
        message: state.currentTab().game.message()
    }
)

export const MessageContainer = connect(mapStateToProps)(Message)