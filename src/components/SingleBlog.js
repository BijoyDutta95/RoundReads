import React from 'react'
import UserIcon from '../icons/user.svg';
import './SingleBlog.css'
import UpvoteIcon from '@material-ui/icons/ThumbUp';
import {useParams} from 'react-router-dom'
import { API } from './API/Api';

function SingleBlog() {
    const params = useParams()
    const id = params.id

    const [blog, setBlog] = React.useState(null)
    const [keys, setKeys] = React.useState(0)

    React.useEffect(() =>{
        function getCurrentBlog(id){
            console.log('get Current blog')
            API.get('api/blogs/' + id)
            .then(data =>{
                console.log(data.data)
                setBlog(data.data)
            })
            .catch(err =>{
                console.log(err)
            })
        }
        getCurrentBlog(id)
    }, [id])

    const addLike = () =>{
        console.log('addLikes')
        
        var blogTemp = blog
        blogTemp.likes = blogTemp.likes+1
        setBlog(blogTemp)
        setKeys(keys+1)
        console.log(blogTemp.likes)
        
        let body = JSON.stringify({
            likes : (blog.likes+1)
        })
        API.patch('api/blogs/' + blog.id + '/', body, {
            headers :{
                'Content-Type' : 'application/json'
            }
        })
        .then(data =>{
            console.log(data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    if(!blog){
        return(
            <div align='center'>
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        )
        
    }else

    return (
        <div id="singleBlogReading" key={keys}>
            <h1>{blog.title}</h1>
            <div id="blogPublisher">
                <img src={UserIcon} alt="blogger" id="bloggerIm"/>
                <div id="publisher">
                    <p>Publisher Name : {blog.publisher_name} </p>
                    {blog.publisher_dept == ''?(
                            <p>Department Name : N/A</p>
                    ):(
                        <p>Department Name : {blog.publisher_dept}</p>
                    )}
                </div>
            </div>
            <p>{blog.date_published.substring(0,10)}</p>
            <div id="blogContent">
                <img src={blog.cover_photo} alt="bookImage" id="blogCover"/>
                <p>{blog.content}</p>
            </div>
            <div id="singleBlogButton">
                <div id="likeCount">
                    <UpvoteIcon id="upvoteIcon" onClick={addLike}/>
                    <p>{blog.likes}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
