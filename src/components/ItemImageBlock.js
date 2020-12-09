import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import './ItemImageBlock.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

function ItemImageBlock(props) {
    const images = [props.items.image1, props.items.image2]
    const [imageIndex, setImageIndex] = React.useState(0)
    return (
        <div id="itemDetailLeft">
            <div id="imageBlock">
                <ArrowBackIcon id="forIcon" onClick={()=>setImageIndex(0)}/>
                <img src={images[imageIndex]} id="indiItemImage"/>
                <ArrowForwardIcon id="backIcon" onClick={()=>setImageIndex(1)}/>
            </div>
            <div id="itemDetailBlock">
                <p id="itemTitle">{props.items.title}</p>
                <div>
                    <strong id="itemCategory">Author: &nbsp;</strong>
                    <p>{props.items.author}</p>
                </div>
                <div>
                    <strong id="itemCategory">Category: &nbsp;</strong>
                    <p>{props.items.category}</p>
                </div>
                <div>
                    <strong id="itemCategory">Available For: &nbsp;</strong>
                    <p>{props.items.availability}</p>
                </div>
                {props.items.availability == 'both'?(
                    <>
                        <div id="salePrice">
                            <strong>Selling Price:&nbsp;</strong>
                            <p>&#8377;</p>&nbsp;
                            <p>{props.items.sale_price}</p>
                        </div>
                        <div id="borrowPrice">
                            <strong>Borrowing Price:&nbsp;</strong>
                            <p>&#8377;</p>&nbsp;
                            <p>{props.items.borrow_price}</p>
                        </div>
                    </>
                ):(null)}
                {props.items.availability == 'sale'?(
                    <div id="salePrice">
                        <strong>Selling Price:&nbsp;</strong>
                        <p>&#8377;</p>&nbsp;
                        <p>{props.items.sale_price}</p>
                    </div>
                ):(null)}
                {props.items.availability == 'borrow'?(
                    <div id="salePrice">
                        <strong>Borrowing Price:&nbsp;</strong>
                        <p>&#8377;</p>&nbsp;
                        <p>{props.items.borrow_price}</p>
                    </div>
                ):(null)}
                
                
                <div>
                    <strong id="itemCondition" >Condition: &nbsp;</strong>
                    <p>{props.items.condition}</p>
                </div>
            </div>
            <div id="itemDescriptionBlock">
                <label>Description</label>
                <p>{props.items.desc}</p>
            </div>
        </div>
    )
}

export default ItemImageBlock
