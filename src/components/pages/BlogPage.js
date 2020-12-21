import React from 'react'
import LatestBlogs from '../LatestBlogs'
import TrendingBlogs from '../TrendingBlogs'
import WriteBlog from '../WriteBlog'
import IndividualItem from './IndividualItem'

function BlogPage() {
    return (
        <div className="globalBlock">
            <LatestBlogs/>
            <TrendingBlogs/>
            <WriteBlog/>
        </div>
    )
}

export default BlogPage
