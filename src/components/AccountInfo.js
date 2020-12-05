import React from 'react'
import UserIcon from '../icons/user.svg';
import './AccountInfo.css'
import { UserContext } from './Context/Contexts';

function AccountInfo() {
    const {user, userSession} = React.useContext(UserContext)

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
                    <>
                    {userSession?(
                        <span>
                            {JSON.parse(userSession).fname} {" "}
                            {JSON.parse(userSession).mname} {" "}
                            {JSON.parse(userSession).lname}
                        </span>
                    ):(null)}
                    </>
                )}
                
            </div>
        </div>
    )
}

export default AccountInfo
