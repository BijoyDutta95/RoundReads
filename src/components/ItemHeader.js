import React from 'react'
import SortIcon from '@material-ui/icons/SwapVert';
import './ItemHeader.css'
function ItemHeader() {
    return (
        <div id="itemHeaderBlock">
            <strong id="headerText">Available Books</strong>
            <div id="itemSort">
                <p>Sort</p>
                <SortIcon/>         
            </div>
            
        </div>
    )
}

export default ItemHeader
