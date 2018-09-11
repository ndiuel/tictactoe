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
        tab: state.current
    }
)
const mapDispatchToProps = dispatch => (
    {
        dispatch: dispatch
    }
)

const mergeProps = (stateProps,dispatchProps)  => (
    {
        onReset: () => reset({
            dispatch: dispatchProps.dispatch,
            tab: stateProps.tab
        }),
        onRestart: () => restart({
            dispatch: dispatchProps.dispatch,
            tab: stateProps.tab
        }),
        onUndo: () => undo({
            dispatch: dispatchProps.dispatch,
            tab: stateProps.tab
        })
    }
)

export const GameControlContainer = connect(mapStateToProps,mapDispatchToProps,mergeProps)(GameControl)

