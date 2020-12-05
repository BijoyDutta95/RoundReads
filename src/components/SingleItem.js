import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import './SingleItem.css'
import { WishListContext } from './Context/Contexts';

function SingleItem() {
    const {items} = React.useContext(WishListContext)

    const renderItem = (item, index) =>{
        return (
            <div id="SingleItem" key={index}>
                <img src="/Images/bookImg.jpg" alt="itemImage" id="SingleItemImage"/>
                <div id="singleItemInfo">
                    <strong>Book Name</strong>
                    <small>Posted By</small>
                    <small>Price</small>
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

export default SingleItem
