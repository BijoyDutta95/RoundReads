import React from 'react'
import './ItemMoreInfo.css'
import { propTypes } from 'react-bootstrap/esm/Image'

function ItemMoreInfo(props) {
    return (
        <div id="ItemBlockRight">
           <div id="sellerInfo">
                <label>Seller Information</label>
                <hr/>
                <p>Seller Name : {props.items.poster_name}</p>
                <p>Seller Email : {props.items.poster_email}</p>
                <button id="contactSellerItem">Contact Seller</button>
           </div>
        </div>
    )
}
export default ItemMoreInfo
