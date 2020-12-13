import React from 'react'
import './MessageCard.css'
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import ReplyPopUp from './ReplyPopUp';
import DeclinePopUp from './DeclinePopUp';
import { MessageContext } from './Context/Contexts';

function MessageCardDeclined(props) {
    const {messages, declinedCount} = React.useContext(MessageContext)

    const renderMessages = (message, index) =>{
        if(message.status == 'accepted' || message.status == 'pending'){
            return null
        }
        return (
            <div id="messageCard" key={index}>
                <img src="/images/bookImg.jpg"/>
                <div id="messageText">
                    <p id="receivedMessage">{message.message}</p>
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
                <div id="vl"></div>
                
            </div>
        )
    }
    
    if(declinedCount == 0){
        return(
            <h1>No Declined Requests</h1>
        )
    }

    return (
        <div id="cardMainBlock">
            {messages.map(renderMessages)}
        </div>
    )
}
    
export default MessageCardDeclined
