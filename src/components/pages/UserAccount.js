import React from 'react'
import AccountDetail from '../AccountDetail'
import AccountInfo from '../AccountInfo'
import './UserAccount.css'

function UserAccount() {
    return (
        <div className="accountBlock">
            <AccountInfo/>
            <AccountDetail/>
        </div>
    )
}

export default UserAccount
