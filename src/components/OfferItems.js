import React from 'react'
import './OfferItems.css'

function OfferItems() {
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
                            <button>Contact Info</button>
                            <button>Make New Offer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferItems
