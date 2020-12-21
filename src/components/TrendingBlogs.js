import React from 'react'
import BlogItem from './BlogItemTrending'
import './TrendingBlogs.css'
import { API } from './API/Api'
function TrendingBlogs() {
    const [blogs, setBlogs] = React.useState([])

    React.useEffect(()=>{
        function getBlogs(){
            console.log('get Trendingssss')
            API.get('api/trending_blogs')
            .then(data=>{
                console.log(data.data)
                setBlogs(data.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        getBlogs()
    }, [])

    return (
        <div id="trendingBlogBlock">
            <h3>Trending Blogs</h3>
            <BlogItem blogs={blogs} setBlogs={setBlogs}/>
        </div>
    )
}

export default TrendingBlogs
