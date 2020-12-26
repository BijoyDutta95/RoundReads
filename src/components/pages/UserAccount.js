import React from 'react'
import AccountDetail from '../AccountDetail'
import AccountInfo from '../AccountInfo'
import './GlobalChange.css'
import { UserContext } from '../Context/Contexts'
import { Redirect } from 'react-router-dom'
import ChangePass from '../ChangePass'


function UserAccount() {
    const {userSession} = React.useContext(UserContext)
    
    if(userSession){
        return (
            <div className="globalBlock">
                <AccountInfo/>
                <ChangePass/>
                <AccountDetail/>
            </div>
        )
    }else{
        return <Redirect to='/'/>
    }
    
}

export default UserAccount
