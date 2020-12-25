import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import './Reset.css'
function EnterID() {
    return (    
        <div id="enterMailBlock">
            <>
                <EmailIcon id="emailIcon"/>
                <h3>Enter Your Registered Mail ID</h3>
            </>
            <div id="idDetails">
                <input type="text" id="mailID"/>
                <button id="sendResetRequest">Send Request</button>
            </div>
        </div>
    )
}

export default EnterID
