import React from "react"
import {connect} from "react-redux"
import {changeTab} from "../tictactoe.js"
import style from "../scss/TabControl.scss"

export const TabControl = ({tabs,changeTab,currentTab}) => (
    <div className="tab-control">
    {tabs.map((tab,index) => {
        let className = "tab-control-btn"
        className = currentTab == tab ? className + " tab-control-btn-active" : className
        return (
            <button className = {className} key = {index} onClick = {() => changeTab(tab)}>{tab}</button>    
        )
    })}
    </div>
)

const mapStateToProps = state => (
    {
        tabs: state.tabs,
        currentTab: state.current
    }
)

const mapDispatchToProps = dispatch => (
    {
        changeTab: tab => changeTab({
            dispatch:dispatch,
            tab:tab}
        )
    }
)

export const TabControlContainer = connect(mapStateToProps,mapDispatchToProps)(TabControl)