import React from 'react'
import LockIcon from '@material-ui/icons/Lock';
import './Reset.css'
function EnterPassword() {
    return (
        <div id="resetPassword">
            <>
                <LockIcon id="lockIcon"/>
                <h3>Enter New Password</h3>
            </>
            <div id="passwordDetail">
                <input type="text" id="newPassword" placeholder="Enter New Password"/>
                <input type="text" id="newPassword" placeholder="Re-enter Password"/>
                <button id="confirmPassword">Update</button>
            </div>
        </div>
    )
}

export default EnterPassword
