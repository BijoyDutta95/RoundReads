import React from 'react'
import './WriteBlog.css'
function WriteBlog() {
    return (
        <div id="writeBlogBlock">
            <h3>Post A Blog</h3>
            <label>Blog Title</label>
            <input type="text" placeholder="Enter Blog Title"/>
            <label>Blog Content</label>
            <textarea type="text" placeholder="Blog Content"/>
            <label>Choose a cover picture</label>
            <input type="file"/> 
            <div id="blogButtons">
                <button id="clearBlogBtn">Clear</button>
                <button id="postBlogBtn">Post</button>
            </div>
        </div>
    )
}

export default WriteBlog
