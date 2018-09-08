import React from "react"
import {connect} from "react-redux"
import {restart,reset,undo} from "../actions.js"
import style from "../scss/GameControl.scss"

export const GameControl = ({onRestart,onReset,onUndo}) => (
    <div className="control">
        <button className="control-btn" onClick = {onReset}>Reset</button>
        <button className="control-btn" onClick = {onUndo}>Undo</button>
        <button className="control-btn" onClick = {onRestart}>Restart</button>       
    </div>
)

const mapStateToProps = state => (
    {
        tab: state.tab
    }
)
const mapDispatchToProps = dispatch => (
    {
        dispatch: dispatch
    }
)

const mergeProps = (stateProps,dispatchProps)  => (
    {
        onReset: () => restart({
            dispatch: dispatch,
            tab: stateProps.tab
        }),
        onRestart: () => reset({
            dispatch: dispatch,
            tab: stateProps.tab
        }),
        onUndo: () => undo({
            dispatch: dispatch,
            tab: stateProps.tab
        })
    }
)

export const GameControlContainer = connect(mapStateToProps,mapDispatchToProps,mergeProps)(GameControl)

