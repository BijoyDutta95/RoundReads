import React from 'react'
import './ItemMoreInfo.css'

function ItemMoreInfo() {
    return (
        <div id="ItemBlockRight">
           <div id="sellerInfo">
                <label>Seller Information</label>
                <hr/>
                <p>Seller Name</p>
                <p>Seller Email</p>
                <button id="contactSellerItem">Contact Seller</button>
           </div>
        </div>
    )
}
export default ItemMoreInfo
