import React from 'react'
import './BlogCard.css'
import UserBlogBlock from './UserBlogBlock'
function BlogCard() {
    return (
        <div id="blogCardBlock">
            <UserBlogBlock/>
            <UserBlogBlock/>
            <UserBlogBlock/>
            <UserBlogBlock/>
            <UserBlogBlock/>
            <UserBlogBlock/>
        </div>
    )
}

export default BlogCard
