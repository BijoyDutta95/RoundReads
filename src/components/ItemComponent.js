import React from 'react'
import './ItemComponent.css'
import ItemCard from './ItemCard'
import { DataContext } from './Context/Contexts'


function ItemComponent() {
    const {next, prev, getItems, count, items} = React.useContext(DataContext)
    
    return (
        <div>
            <div id="itemsBlock">
                <p>Showing {items.length} of {count} Results</p>
                <ItemCard/> 
                <div id="componentButtons" align='center'>
                    {prev?(
                            <button className='prev-next-button' onClick={() => {getItems(prev)}}>Prev</button> 
                    ):(
                        <button className='prev-next-button'>Prev</button>
                    )}
                    {next?(
                            <button className='prev-next-button' onClick={() => {getItems(next)}}>Next</button> 
                    ):(
                        <button className='prev-next-button'>Next</button>
                    )}
                
                </div>          
            </div>
            
        </div>
            
    )
}
export default ItemComponent
