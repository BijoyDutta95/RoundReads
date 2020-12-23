import React from 'react'
import './UserBlogBlock.css'
import DeleteIcon from '@material-ui/icons/Delete';
import UpvoteIcon from '@material-ui/icons/ThumbUp';

function UserBlogBlock() {
    return (
        <div id="singleBlogCard">
                <img src="/images/bookImg.jpg" alt="blogImage" id="blogPhoto"/>
                <div id="userBlogInfo">
                    <div id="blogTopBlock">
                        <div id="blogItemDetail">
                            <strong>Title</strong>
                            <small>Date Published</small>                  
                        </div>
                        <DeleteIcon id="deleteBlog"/>
                    </div>
                    <div id="singleBlogBtn">
                        <div id="upvoteCount">
                            <UpvoteIcon id="upIcon"/>
                            <p>10</p>
                        </div>
                        <button id="readOwnBlog">Read Blog</button>
                    </div>
                </div>
        </div>
    )
}

export default UserBlogBlock
