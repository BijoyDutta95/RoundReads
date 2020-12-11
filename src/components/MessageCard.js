import React from 'react'
import './MessageCard.css'
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import ReplyPopUp from './ReplyPopUp';

function MessageCard() {
    const replyRef=React.useRef();

    const openPopUp=()=>{
        replyRef.current.openModal();
    }

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
                <CloseIcon id="decline"/>
            </div>
        </div>
    )
}

export default MessageCard
