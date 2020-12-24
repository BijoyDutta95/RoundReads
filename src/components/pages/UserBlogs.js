import React from 'react'
import AccountInfo from '../AccountInfo'
import UserBlogBlock from '../UserBlogBlock'

function UserBlogs() {
    return (
        <div className="globalBlock">
            <h2>Your Blogs</h2>
            <AccountInfo/>
            <UserBlogBlock/>
        </div>
    )
}

export default UserBlogs