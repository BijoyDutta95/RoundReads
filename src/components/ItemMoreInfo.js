import React from 'react'
import './ItemMoreInfo.css'
import MakeOfferPopUp from './MakeOfferPopUp';

function ItemMoreInfo() {
    const popRef=React.useRef();

    const openPopUp=()=>{
        popRef.current.openModal();
    }
    return (
        <div id="ItemBlockRight">
           <div id="sellerInfo">
                <label>Seller Information</label>
                <hr/>
                <p>Seller Name</p>
                <p>Seller Email</p>
                <button id="contactSellerItem" onClick={openPopUp}>Contact Seller</button>
                <MakeOfferPopUp ref={popRef}/>
           </div>
        </div>
    )
}
export default ItemMoreInfo
