import React from 'react'
import './WriteBlog.css'
function WriteBlog() {
    return (
        <div id="writeBlogBlock">
            <h3>Post A Blog</h3>
            <strong>Blog Title</strong>
            <input type="text" placeholder="Enter Blog Title"/>
            <strong>Blog Content<span id="characterCount">5000 characters</span></strong>
            <textarea type="text" placeholder="Blog Content"/>
            <strong>Choose a cover picture</strong>
            <input type="file"/> 
            <div id="blogButtons">
                <button id="clearBlogBtn">Clear</button>
                <button id="postBlogBtn">Post</button>
            </div>
        </div>
    )
}

export default WriteBlog
