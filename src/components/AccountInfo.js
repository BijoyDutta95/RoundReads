import React from 'react'
import UserIcon from '../icons/user.svg';
import './AccountInfo.css'

function AccountInfo() {
    return (
        <div id="abstractInfo">
            <img src={UserIcon} alt="userIcon" id="usrIcon"/>
            <div id="infoText">
                <span>Hello,</span>
                <span>User Name</span>
            </div>
        </div>
    )
}

export default AccountInfo
