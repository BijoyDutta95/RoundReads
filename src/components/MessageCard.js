import React from 'react'
import './MessageCard.css'
function MessageCard(props) {
    
    const renderMessages = (message, index) =>{
        return (
            <div id="messageCard">
                <img src="/images/bookImg.jpg"/>
                <div id="messageText">
                    <p>{message.message}</p>
                    <hr/>
                    <div id="offers">
                        <label>Customer Name: {message.requester_name}</label><br/>
                        <label>Customer Email: {message.requester_email}</label><br/>
                        <label>Request For: {message.request_for}</label><br/>                        
                        {message.request_for == 'buying'?(
                            <label>Offered Amount: {message.buying_offer}</label>
                        ):(
                            <label>Requested Duration: {message.borrowing_offer} months</label>
                        )}
                        
            
                    </div>
                </div>
            </div>
        )
    }
    

    return (
        <div id="cardMainBlock">
            {props.messages.map(renderMessages)}
        </div>
    )
}

export default MessageCard
