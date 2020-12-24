import React from 'react'
import AccountInfo from '../AccountInfo'
import UserBlogBlock from '../UserBlogBlock'
import { UserContext } from '../Context/Contexts'
import { Redirect } from 'react-router-dom'

function UserBlogs() {
    const {userSession} = React.useContext(UserContext)
    
    if(userSession){
        return (
            <div className="globalBlock">
                <h2>Your Blogs</h2>
                <AccountInfo/>
                <UserBlogBlock/>
            </div>
        )
    }else{
        return <Redirect to='/'/>
    }
    
}

export default UserBlogs