import React from 'react'
import './OfferItems.css'

function OfferItems(props) {
    /*const getBookInfo = (book, index) =>{
        if(book.id == offer)
    }*/
    
    const renderOffers = (offer, index) =>{
        return (
            <div key={index}>
                <div id="offerItemCard">
                    {props.books.map((book) =>(
                        <>
                        {book.id == offer.book_id?(
                            <img src={book.image1}/>
                        ):(null)}
                        </>
                    ))}
                    
                    <div id="offerReply">
                        <div id="userOffer">
                            <label>Item Name: 
                                {props.books.map((book) =>(
                                    <>
                                    {book.id == offer.book_id?(
                                        <>{book.title}</>
                                    ):(null)}
                                    </>
                                ))}
                                </label><br/>
                            <label>Offer For: {offer.request_for}</label><br/>
                            <label>Cost/Duration: {offer.buying_offer}  {offer.borrowing_offer}months</label><br/>                        
                        </div>
                        <div id="sellerReply">
                            <div id="replyText">
                                <p id="sellerMessage">Seller Reply: NA</p>
                                <label>Status: NULL</label>   
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
    

    return (
        <div id="offerMainBlock">
            {props.offers.map(renderOffers)}
        </div>
    )
}

export default OfferItems
