import React from 'react'
import './SearchDropDown.css'

export default function SearchDropDown(props){
    
    const renderSearches = (item, index) =>{
        return(
            <div>
            {props.suggessions[props.activeIndex] == item?(
                <div key={index} className="searchDropdownItemActive">
                    
                    <li onClick={() => {
                        props.setSearchTerm(item)
                        props.setSugessions([])
                    }} 
                    
                    >{item}</li>
                    
                </div>
            ):(
                <div key={index} className="searchDropdownItem">
                    
                    <li onClick={() => {
                        props.setSearchTerm(item)
                        props.setSugessions([])
                    }} 
                    
                    >{item}</li>
                    
                </div>
            )}
            </div>
            
        )
    }
    
    return (
        <div className="searchDropdown">
            {props.suggessions.map(renderSearches)}
        </div>
    )

    
}