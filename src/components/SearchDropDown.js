import React from 'react'
import './SearchDropDown.css'

export default function SearchDropDown(props){
    
    const renderSearches = (item, index) =>{
        return(
            <div key={index} className="dropdown-submenu-item">
                
                <li>{item}</li>
                
            </div>
        )
    }
    
    return (
        <div className="dropdown-submenu">
            {props.suggessions.map(renderSearches)}
        </div>
    )

    
}