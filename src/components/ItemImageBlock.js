import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import './ItemImageBlock.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

function ItemImageBlock() {
    return (
        <div id="itemDetailLeft">
            <div id="imageBlock">
                <ArrowBackIcon id="forIcon"/>
                <img src="/images/bookImg2.jpg" id="indiItemImage"/>
                <ArrowForwardIcon id="backIcon"/>
            </div>
            <div id="itemDetailBlock">
                <p id="itemTitle">Title</p>
                <div>
                    <strong id="itemCategory">Category: &nbsp;</strong>
                    <p>Engineering</p>
                </div>
                <div id="salePrice">
                    <strong>Selling Price:&nbsp;</strong>
                    <p>&#8377;</p>&nbsp;
                    <p>450</p>
                </div>
                <div id="borrowPrice">
                    <strong>Borrowing Price:&nbsp;</strong>
                    <p>&#8377;</p>&nbsp;
                    <p>430</p>
                </div>
                <div>
                    <strong id="itemCondition" >Condition: &nbsp;</strong>
                    <p>Almost New</p>
                </div>
            </div>
            <div id="itemDescriptionBlock">
                <label>Description</label>
                <p>Decription Decription Decription Decription Decription Decription Decription Decription Decription Decription Decription Decription
                Decription Decription Decription Decription Decription Decription Decription Decription Decription Decription Decription Decription Decription 
                Decription Decription Decription Decription Decription Decription Decription Decription Decription </p>
            </div>
        </div>
    )
}

export default ItemImageBlock
