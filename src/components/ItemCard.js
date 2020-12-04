import React from 'react';
import './ItemCard.css'
import { DataContext } from './Context/Contexts';
import BookmarkIcon from '@material-ui/icons/Bookmark';

function ItemCard() {
    const {items} = React.useContext(DataContext)
    const renderCard= (card, index) =>{
        

        return(
            <div id="cardBlock" key={index}>
                <img src={card.image1} alt="cardImage" className="cardImage"/>
                <strong className="cardTitle">{card.title}</strong>
                <small className="cardCondition">{card.condition}</small>
                <div id="cardBlock_button">
                    {/*<button className="cardButtonSave">Save</button>*/}
                    <div id="saveButton">
                        <p>Save</p>
                        <BookmarkIcon id="bookmarkIcon"/>
                    </div>
                    <button id="cardButtonContact">Contact Seller</button>
                </div>    
            </div>
        )
    }
    return (
       
            <div id="cardMainBlock">
            {items.map(renderCard)}
        </div>
       
        
    )
}

export default ItemCard
