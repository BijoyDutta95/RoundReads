import React from 'react'
import './ItemComponent.css'
import ItemCard from './ItemCard'
function ItemComponent() {
    return (
        <div id="itemsBlock">
            <p>Showing 12 of 50 Results</p>
            <ItemCard/>            
        </div>
    )
}
export default ItemComponent
