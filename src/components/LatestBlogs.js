import React from 'react'
import BlogItem from './BlogItem'
import './LatestBlogs.css'
function LatestBlogs() {
    return (
        <div id="latestBlogBlock">
            <h3>Latest Blogs</h3>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
            <div id="navButtons">
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    )
}

export default LatestBlogs
