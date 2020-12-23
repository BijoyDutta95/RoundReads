import React from 'react'
import './ItemComponent.css'
import ItemCard from './ItemCard'
import { DataContext } from './Context/Contexts'


function ItemComponent() {
    const {next, prev, getItems, count, items, fetched, prevCount, setPrevCount} = React.useContext(DataContext)
    
    if(fetched){
        if(items.length == 0){
            return(
                <div id="itemsBlock">
                    <p>No Result Found</p>
                </div>
            )
            
        }else
        return (
            <div>
                <div id="itemsBlock">
                    <p>Showing {prevCount} - {prevCount + items.length - 1} of {count} Results</p>
                    <ItemCard/> 
                    <div id="componentButtons" align='center'>
                        {prev?(
                                <button className='prev-next-button' onClick={() => {
                                    getItems(prev)
                                    setPrevCount(prevCount - 12)
                                }}>Prev</button> 
                        ):(
                            <button className='prev-next-button'>Prev</button>
                        )}
                        {next?(
                                <button className='prev-next-button' onClick={() => {
                                    getItems(next)
                                    setPrevCount(items.length+prevCount)
                                }}>Next</button> 
                        ):(
                            <button className='prev-next-button'>Next</button>
                        )}
                    
                    </div>          
                </div>
                
            </div>
                
        )
    }else{
        return(
            <div align='center'>
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        )
        
    }
    
}
export default ItemComponent
