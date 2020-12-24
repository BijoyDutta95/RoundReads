import React from 'react'
import BlogItem from './BlogItemTrending'
import './TrendingBlogs.css'
import { API } from './API/Api'
function TrendingBlogs(props) {
    const [blogs, setBlogs] = React.useState([])
    const [fetched, setFetched] = React.useState(false)

    React.useEffect(()=>{
        function getBlogs(){
            props.setLoadingTrend(true)
            console.log('get Trendingssss')
            API.get('api/trending_blogs')
            .then(data=>{
                console.log(data.data)
                setBlogs(data.data)
                setFetched(true)
                props.setLoadingTrend(false)
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
            {!fetched?(
                <div align='center'>
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            ):(
                <BlogItem blogs={blogs} setBlogs={setBlogs}/>
            )}
        </div>
    )
}

export default TrendingBlogs
