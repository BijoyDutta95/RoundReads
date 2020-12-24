import React from 'react'
import AccountInfo from '../AccountInfo'
import UserAdItems from '../UserAdItems'
import './GlobalChange.css'
import { UserContext } from '../Context/Contexts'
import { Redirect } from 'react-router-dom'

function UserAd() {
    const {userSession} = React.useContext(UserContext)

    if(userSession){
        return (
            <div className="globalBlock">
                <h2>Your Ads</h2>   
                <AccountInfo/>
                <UserAdItems/>
            </div>
        )
    }else{
        return <Redirect to='/'></Redirect>
    }
    
}
export default UserAd
