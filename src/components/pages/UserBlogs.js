import React from 'react'
import AccountInfo from '../AccountInfo'
import BlogCard from '../BlogCard'

function UserBlogs() {
    return (
        <div className="globalBlock">
            <h2>Your Blogs</h2>
            <AccountInfo/>
            <BlogCard/>
        </div>
    )
}

export default UserBlogs