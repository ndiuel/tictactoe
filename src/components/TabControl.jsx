import React from "react"
import style from "../scss/TabControl.scss"

export const TabControl = ({tabs,changeTab,currentTab}) => (
    <div className="tab">
    {tabs.map(tab => {
        let className = "tab-btn"
        className = currentTab == tab ? className + " tab-btn-active" : className
        return (
            <button className = {className}>{tab}</button>    
        )
    })}
    </div>
)