import React from 'react'
import './ItemComponent.css'
import ItemCard from './ItemCard'
import { DataContext } from './Context/DataContext'


function ItemComponent() {
    const {next, prev, getItems, count, items} = React.useContext(DataContext)
    
    return (
        <div>
            <div id="itemsBlock">
                <p>Showing {items.length} of {count} Results</p>
                <ItemCard/>            
            </div>
            <div align='center'>
                {prev?(
                    <>
                        <button className='prev-next-button' onClick={() => {getItems(prev)}}>Prev</button>
                    </> 
                ):(null)}
                {next?(
                    <>
                        <button className='prev-next-button' onClick={() => {getItems(next)}}>Next</button>
                    </> 
                ):(null)}
            
            </div>
        </div>
    )
}
export default ItemComponent
