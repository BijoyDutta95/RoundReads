import React from 'react'
import UserIcon from '../icons/user.svg';
import './AccountInfo.css'
import { UserContext } from './Context/Contexts';

function AccountInfo() {
    const {user} = React.useContext(UserContext)

    return (
        <div id="abstractInfo">
            <img src={UserIcon} alt="userIcon" id="usrIcon"/>
            <div id="infoText">
                <span>Hello,</span>
                {user?(
                    <span>
                    {JSON.parse(user).fname} {" "}
                    {JSON.parse(user).mname} {" "}
                    {JSON.parse(user).lname}
                </span>
                ):(
                    <span>
                    {JSON.parse(sessionStorage.getItem('user')).fname} {" "}
                    {JSON.parse(sessionStorage.getItem('user')).mname} {" "}
                    {JSON.parse(sessionStorage.getItem('user')).lname}
                </span>
                )}
                
            </div>
        </div>
    )
}

export default AccountInfo
