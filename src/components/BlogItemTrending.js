import React from 'react'
import UserIcon from '../icons/user.svg';
import './BlogItem.css'
import UpvoteIcon from '@material-ui/icons/ThumbUp';
import { API } from './API/Api';
import {Redirect} from 'react-router-dom'
//import { TrendingBlogContext } from './Context/Contexts';

function BlogItem(props) {
    //const {blogs, setBlogs} = React.useContext(TrendingBlogContext)
    const [readClicked, setReadClicked] = React.useState(false)
    const [currentBlog, setCurrentBlog] = React.useState(null)

    const addLike = (id, currentLikes) =>{
        console.log('addLikes')
        
        var blogsTemp = props.blogs
        
        for(let i in blogsTemp){
            if(blogsTemp[i].id == id){
                
                blogsTemp[i].likes = blogsTemp[i].likes + 1
                //blogsTemp[i].title = 'editedsss'
                console.log(blogsTemp[i].likes)
                props.setBlogs([...blogsTemp])
                break
            }
        }
        //console.log(blogsTemp)
        
        
        let body = JSON.stringify({
            likes : (currentLikes+1)
        })
        API.patch('api/blogs/' + id + '/', body, {
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
    
    const renderBlogs = (blog, index) =>{
        return (
            <div id="blogItemBlock" key={index}>
                <img src={blog.cover_photo} alt="blogImage" id="blogImage"/>
                <div id="blogInfo">
                    <div id="blogOwner">
                        <img src={UserIcon} alt="blogOwner" id="bloggerImg"/>
                        <div id="publisherInfo">
                            <p>Publisher Name : {blog.publisher_name}</p>
                            {blog.publisher_dept == ''?(
                                 <p>Department Name : N/A</p>
                            ):(
                                <p>Department Name : {blog.publisher_dept}</p>
                            )}
                           
                        </div>
                        
                    </div>
                    <div id="blogDetail">
                        <strong>{blog.title}</strong>
                        <p>{blog.date_published.substring(0,10)}</p>
                    </div>
                    <div id="blogBottom">
                        <div id="upvoteCount">
                            <UpvoteIcon id="upIcon" onClick={() =>{
                                addLike(blog.id, blog.likes)
                                
                            }}/>
                            <p>{blog.likes}</p>
                        </div>
                        <button onClick={() =>{
                            setReadClicked(true)
                            setCurrentBlog(blog.id)
                        }}>Read Blog</button>
                    </div>
                </div>
            </div>
        )
    }

    if(readClicked && currentBlog){
        return (
            <Redirect to={'currentBlog/' + currentBlog}/>
        )
    }
    
    return (   
        <div >
            {props.blogs.map(blog => renderBlogs(blog, blog.id))}
            
        </div>          
    )
    
}

export default BlogItem
