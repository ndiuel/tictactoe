import React from "react"
import style from "../scss/TabControl.scss"

export const TabControl = ({tabs,changeTab,currentTab}) => (
    <div className="tab-control">
    {tabs.map((tab,index) => {
        let className = "tab-control-btn"
        className = currentTab == tab ? className + " tab-control-btn-active" : className
        return (
            <button className = {className} key = {index}>{tab}</button>    
        )
    })}
    </div>
)