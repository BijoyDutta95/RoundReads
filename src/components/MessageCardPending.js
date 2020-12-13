import React from 'react'
import './MessageCard.css'
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import ReplyPopUp from './ReplyPopUp';
import DeclinePopUp from './DeclinePopUp';
import { MessageContext } from './Context/Contexts';

function MessageCardPending(props) {

    const replyRef=React.useRef();
    const declineRef=React.useRef();

    const openPopUp=()=>{
        replyRef.current.openModal();
    }
    const openDeclinePop=()=>{
        declineRef.current.openModal();
    }

    const [currentMessage, setCurrentMessage] = React.useState([])
    const {messages, pendingCount} = React.useContext(MessageContext)

    const renderMessages = (message, index) =>{
        if(message.status == 'declined' || message.status == 'accepted'){
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
                        {message.status == 'pending'?(
                            <label>Status : Waiting for your RESPONSE</label>
                        ):(null)}
                        {message.status == 'accepted'?(
                            <label>Status : Accepted</label>
                        ):(null)}
                    </div>
                    
                    
                </div>
                <div id="vl"></div>
                {message.status == 'pending'?(
                    <div id="messageButtons">
                    <CheckIcon id="accept" onClick={() =>{
                        setCurrentMessage(message)
                        openPopUp()
                    }}/>
                    <ReplyPopUp ref={replyRef} currentMessage={currentMessage}/>
                    <CloseIcon id="decline" onClick={() =>{
                        setCurrentMessage(message)
                        openDeclinePop()
                    }}/>
                    <DeclinePopUp ref={declineRef} currentMessage={currentMessage} />
                    </div>
                ):(null)}
                
            </div>
        )
    }
    
    if(pendingCount == 0){
        return(
            <div><h1>No Pending Requests</h1></div>
        )
    }

    return (
        <div id="cardMainBlock">
            {messages.map(renderMessages)}
        </div>
    )
}
    
export default MessageCardPending