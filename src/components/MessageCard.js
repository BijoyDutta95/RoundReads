import React from 'react'
import './MessageCard.css'
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import ReplyPopUp from './ReplyPopUp';
import DeclinePopUp from './DeclinePopUp';

function MessageCard(props) {

    const replyRef=React.useRef();
    const declineRef=React.useRef();

    const openPopUp=()=>{
        replyRef.current.openModal();
    }
    const openDeclinePop=()=>{
        declineRef.current.openModal();
    }
    
    const renderMessages = (message, index) =>{
        return (
            <div id="messageCard">
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
                    <div id="vl"></div>
                    <div id="messageButtons">
                        <CheckIcon id="accept" onClick={openPopUp}/>
                        <ReplyPopUp ref={replyRef}/>
                        <CloseIcon id="decline" onClick={openDeclinePop}/>
                        <DeclinePopUp ref={declineRef} />
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
/*

function MessageCard() {
    

    return (
        <div id="messageCard">
            <img src="/images/bookImg.jpg"/>
            <div id="messageText">
                <p id="receivedMessage">Received messageReceived messageReceived messageReceived messageReceived message................................</p>
                <hr/>
                <div id="offers">
                    <label>Offered Amount: </label>
                    <p>394</p>&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>Requested Duration: </label>
                    <p>2months</p>
                </div>
            </div>
            <div id="vl"></div>
            <div id="messageButtons">
                <CheckIcon id="accept" onClick={openPopUp}/>
                <ReplyPopUp ref={replyRef}/>
                <CloseIcon id="decline" onClick={openDeclinePop}/>
                <DeclinePopUp ref={declineRef} />
            </div>
        </div>
   */
