import React from 'react'
import AccountDetail from '../AccountDetail'
import AccountInfo from '../AccountInfo'
import './UserAccount.css'
import { UserContext } from '../Context/Contexts'
import { Redirect } from 'react-router-dom'


function UserAccount() {
    const {user, userSession} = React.useContext(UserContext)
    
    if(user || userSession){
        return (
            <div className="accountBlock">
                <AccountInfo/>
                <AccountDetail/>
            </div>
        )
    }else{
        return <Redirect to='/'/>
    }
    
}

export default UserAccount
