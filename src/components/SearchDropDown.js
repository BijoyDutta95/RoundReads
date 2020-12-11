import React from 'react'
import './SearchDropDown.css'

export default function SearchDropDown(props){
    
    const renderSearches = (item, index) =>{
        return(
            <div key={index} className="searchDropdownItem">
                
                <li>{item}</li>
                
            </div>
        )
    }
    
    return (
        <div className="searchDropdown">
            {props.suggessions.map(renderSearches)}
        </div>
    )

    
}