import React from 'react'
import AccountInfo from '../AccountInfo'
import UserAdItems from '../UserAdItems'
import './GlobalChange.css'
function UserAd() {
    return (
        <div className="globalBlock">
            <AccountInfo/>
            <UserAdItems/>
            <UserAdItems/>
        </div>
    )
}

export default UserAd
