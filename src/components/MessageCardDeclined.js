import React from 'react'
import './MessageCard.css'
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import ReplyPopUp from './ReplyPopUp';
import DeclinePopUp from './DeclinePopUp';
import { MessageContext } from './Context/Contexts';
import Mailbox from '../icons/mailbox.svg';

function MessageCardDeclined(props) {
    const {messages, declinedCount} = React.useContext(MessageContext)

    const renderMessages = (message, index) =>{
        if(message.status == 'accepted' || message.status == 'pending'){
            return null
        }
        return (
            <div className="messageCard" key={index}>
                <img src="/images/bookImg.jpg"/>
                <div className="messageText">
                    <p className="receivedMessage">{message.message}</p>
                    <hr id="mesHline"/>
                    <div className="offers">
                        <label>Customer Name: {message.requester_name}&nbsp;</label><br/>
                        <label>Customer Email: {message.requester_email}&nbsp;</label><br/>
                        <label>Request For: {message.request_for}&nbsp;</label><br/>                        
                        {message.request_for == 'buying'?(
                            <label>Offered Amount: {message.buying_offer}&nbsp;</label>
                        ):(
                            <label>Requested Duration: {message.borrowing_offer}&nbsp; months</label>
                        )}
                        
                    </div>
                    
                    
                </div>
                
            </div>
        )
    }
    
    if(declinedCount == 0){
        return(
            <div id="noMessages">
                <p>Empty Mail Box!</p>
                <p>It seems lonely here! Try Posting a new Ad</p>
                <img src={Mailbox} alt="mailbox" id="mailImage"/>
            </div>
        )
    }

    return (
        <div className="cardMainBlock">
            {messages.map(renderMessages)}
        </div>
    )
}
    
export default MessageCardDeclined
