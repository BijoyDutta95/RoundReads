import React from 'react'
import './MessageCard.css'
function MessageCard() {
    return (
        <div id="messageCard">
            <img src="/images/bookImg.jpg"/>
            <div id="messageText">
                <p>Received messageReceived messageReceived messageReceived messageReceived message................................</p>
                <hr/>
                <div id="offers">
                    <label>Offered Amount: </label>
                    <p>394</p>&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>Requested Duration: </label>
                    <p>2months</p>
                </div>
            </div>
        </div>
    )
}

export default MessageCard
