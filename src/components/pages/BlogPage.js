import React from 'react'
import LatestBlogs from '../LatestBlogs'
import TrendingBlogs from '../TrendingBlogs'
import WriteBlog from '../WriteBlog'

function BlogPage() {
    const [loadingTrend, setLoadingTrend] = React.useState(false)
    const [loadingLatest, setLoadingLatest] = React.useState(false)
    return (
        <div className="globalBlock">
            <LatestBlogs setLoadingLatest={setLoadingLatest}/>
            <TrendingBlogs setLoadingTrend={setLoadingTrend}/>
            {!loadingTrend && !loadingLatest?(
                <WriteBlog/>
            ):(null)}
        </div>
    )
}

export default BlogPage
