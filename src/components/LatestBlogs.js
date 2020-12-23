import React from 'react'
import BlogItem from './BlogItemLatest'
import './LatestBlogs.css'
import { API } from './API/Api'
import { TrendingBlogContext } from './Context/Contexts'

function LatestBlogs() {
    const [blogs, setBlogs] = React.useState([])
    const [url, setUrl] = React.useState('api/blogs')
    const [next, setNext] = React.useState('')
    const [prev, setPrev] = React.useState('')

    React.useEffect(() =>{
        getBlogs(url)
    }, [url])

    const getBlogs = (url) =>{
        console.log('getBlogs called')
        API.get(url)
        .then(data =>{
            setBlogs(data.data.results)
            setNext(data.data.next)
            setPrev(data.data.previous)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <div id="latestBlogBlock">
            <h3>Latest Blogs</h3>
            <TrendingBlogContext.Provider value={{blogs, setBlogs}}>
                <BlogItem/>
            </TrendingBlogContext.Provider>
            <div id="navButtons">
                {prev?(
                    <button onClick={() => setUrl(prev)}>Previous</button>
                ):(
                    <button>Previous</button>
                )}
                {next?(
                    <button onClick={() => setUrl(next)}>Next</button>
                ):(
                    <button>Next</button>
                )}
            </div>
        </div>
    )
}

export default LatestBlogs