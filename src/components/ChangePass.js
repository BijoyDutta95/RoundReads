import React from 'react'
import LockIcon from '@material-ui/icons/Lock';
import './AccountInfo.css'

function ChangePass() {
    return (
        <div id="changePass">
            <LockIcon id="passIcon"/>
            <p>Change Password</p>
        </div>
    )
}

export default ChangePass