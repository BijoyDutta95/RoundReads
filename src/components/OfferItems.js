import React from 'react'
import './OfferItems.css'
import MakeOfferPopUp from './MakeOfferPopUp';
import SellerContactInfo from './SellerContactInfo';

function OfferItems(props) {
    
    const offerRef=React.useRef();
    const infoRef=React.useRef();

    const openPopUp=()=>{
        offerRef.current.openModal();
    }
    const infoPopUp=()=>{
        infoRef.current.openModal();
    }

    const [currentOffer, setCurrentOffer] = React.useState([])
    const [currentBook, setCurrentBook] = React.useState([])

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
                            {offer.request_for == 'buying'?(
                                <><label>Cost: Rs {offer.buying_offer}</label><br/></>                        
                            ):(
                                <><label>Duration: {offer.borrowing_offer} months</label><br/></>                        

                            )}
                        </div>
                        <div id="sellerReply">
                            <div id="replyText">
                                <label>Status: {offer.status}</label>
                                {offer.status != 'pending'?(
                                    <p id="sellerMessage">Seller Reply: {offer.response}</p>
                                ):(null)}
                                   
                            </div>
                            <div id="replyButtons">
                                {offer.status == 'accepted'?(
                                    <>
                                        <button onClick={() =>{
                                            setCurrentOffer(offer)
                                            infoPopUp()
                                        }} 
                                        >Contact Info</button>
                                        
                                    </>
                                ):(null)}
                                {offer.status == 'declined'?(
                                    <>
                                        <button onClick={() =>{
                                            for(let i in props.books){
                                                if(props.books[i].id == offer.book_id){
                                                    setCurrentBook(props.books[i])
                                                }
                                            }
                                            openPopUp()
                                        }}>Make New Offer</button>
                                        
                                    </>
                                ):(null)}
                                
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
            <SellerContactInfo ref={infoRef} currentOffer={currentOffer} books={props.books}/>
            <MakeOfferPopUp ref={offerRef} currentItem={currentBook}/>
        </div>
    )
}

export default OfferItems
