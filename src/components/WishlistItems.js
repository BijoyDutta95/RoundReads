import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import './WishlistItems.css'
import { WishListContext } from './Context/Contexts';

function WishlistItems() {
    const {items} = React.useContext(WishListContext)

    const renderItem = (item, index) =>{
        return (
            <div id="SingleItem" key={index}>
                <img src={item.image1} alt="itemImage" id="SingleItemImage"/>
                <div id="singleItemInfo">
                    <strong>Title : {item.title}</strong>
                    <small>Posted By : {item.posted_by}</small>
                    <small>Price : {item.price}</small>
                </div>
                <div id="singleItemButtons">
                    <BookmarkIcon id="saveButton"/>
                    <button>Contact Seller</button>
                </div>
            </div>
        )
    }

    return (   
        <div id="wishlistItemsBlock">
            {items.map(renderItem)}
        </div>
    )
}

export default WishlistItems
