import React from 'react'
import MessageCard from '../MessageCard'
import Mailbox from '../../icons/mailbox.svg';
import './GlobalChange.css'
function Messages() {
    return (
        <div className="globalBlock">
            <div id="noMessages">
                <p>Empty Mail Box!</p>
                <p>It seems lonely here! Try Posting a new Ad</p>
                <img src={Mailbox} alt="mailbox" id="mailImage"/>
            </div>
            <MessageCard/>
            <MessageCard/>
        </div>
    )
}
export default Messages
