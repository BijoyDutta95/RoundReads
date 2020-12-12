import React from 'react'
import './OfferItems.css'
import MakeOfferPopUp from './MakeOfferPopUp';
import SellerContactInfo from './SellerContactInfo';

function OfferItems() {

    const offerRef=React.useRef();
    const infoRef=React.useRef();

    const openPopUp=()=>{
        offerRef.current.openModal();
    }
    const infoPopUp=()=>{
        infoRef.current.openModal();
    }

    return (
        <div>
            <div id="offerItemCard">
                <img src="/images/bookImg.jpg"/>
                <div id="offerReply">
                    <div id="userOffer">
                        <label>Item Name: </label><br/>
                        <label>Offer For:</label><br/>
                        <label>Cost/Duration: </label><br/>                        
                    </div>
                    <div id="sellerReply">
                        <div id="replyText">
                            <p id="sellerMessage">Seller Reply: </p>
                            <label>Status: </label>   
                        </div>
                        <div id="replyButtons">
                            <button onClick={infoPopUp} >Contact Info</button>
                            <SellerContactInfo ref={infoRef}/>
                            <button onClick={openPopUp}>Make New Offer</button>
                            <MakeOfferPopUp ref={offerRef}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferItems
