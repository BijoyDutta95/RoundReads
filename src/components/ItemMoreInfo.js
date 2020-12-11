import React from 'react'
import './ItemMoreInfo.css'

import { propTypes } from 'react-bootstrap/esm/Image'
import MakeOfferPopUp from './MakeOfferPopUp';
function ItemMoreInfo(props) {

    const popRef=React.useRef();

    const openPopUp=()=>{
        popRef.current.openModal();
    }
    const [currentItem, setCurrentItem] = React.useState([])

    return (
        <div id="ItemBlockRight">
           <div id="sellerInfo">
                <label>Seller Information</label>
                <hr/>
                <p>Seller Name : {props.items.poster_name}</p>
                <p>Seller Email : {props.items.poster_email}</p>
                <button id="contactSellerItem" onClick={() =>{
                    setCurrentItem(props.items)
                    openPopUp()
                }}
                >Contact Seller</button>
                <MakeOfferPopUp ref={popRef} currentItem={currentItem}/>

           </div>
        </div>
    )
}
export default ItemMoreInfo
