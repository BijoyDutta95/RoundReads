import React from 'react'
import UserIcon from '../icons/user.svg';
import './BlogItem.css'
import UpvoteIcon from '@material-ui/icons/ThumbUp';

function BlogItem() {
    return (
        <div id="blogItemBlock">
            <img src="/images/bookImg.jpg" alt="blogImage" id="blogImage"/>
            <div id="blogInfo">
                <div id="blogOwner">
                    <img src={UserIcon} alt="blogOwner" id="bloggerImg"/>
                    <div id="publisherInfo">
                        <p>Publisher Name </p>
                        <p>Department Name </p>
                    </div>
                    
                </div>
                <div id="blogDetail">
                    <strong>Blog Title</strong>
                    <p>Date Published</p>
                </div>
                <div id="blogBottom">
                    <div id="upvoteCount">
                        <UpvoteIcon id="upIcon"/>
                        <p>30</p>
                    </div>
                    <button>Read Blog</button>
                </div>
            </div>
        </div>
    )
}

export default BlogItem
