import React, {forwardRef,useImperativeHandle} from 'react';
import './SellerContactInfo.css'

const SellerContactInfo=forwardRef((props,ref)=> {

    const [display, setDisplay]=React.useState(false);

    const open=()=>{
        setDisplay(true);
    }

    const close=()=>{
        setDisplay(false);
    };
    useImperativeHandle(ref,()=>{
        return{
            openModal: () => open(),
            close: () => close()
        }
    })
    if(display){
        return (
            <div className="infoWrapper">
                    <div onClick={close} className="infoBackdrop"/>
                    <div className="infoBox">
                        <div id="sellerDetail">
                                {props.books.map((book) =>(
                                    <>{book.id == props.currentOffer.book_id?(
                                        <>
                                        <p>Seller Name: {book.poster_name}</p>
                                        <p>Mail ID: {book.poster_email}</p>
                                        <p>Contact Number: {props.currentOffer.seller_contact}</p>
                                        </>
                                    ):(null)}</>
                                ))}
                            
                        </div>
                        <button id="hideButton" onClick={close}>Hide</button>
                    </div>
                    
                </div>
        )
    }
    return null;
    
});

export default SellerContactInfo
