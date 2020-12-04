import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import './SingleItem.css'

function SingleItem() {
    return (
        <div id="SingleItem">
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

export default SingleItem
