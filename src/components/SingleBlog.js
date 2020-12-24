import React from 'react'
import UserIcon from '../icons/user.svg';
import './SingleBlog.css'
import UpvoteIcon from '@material-ui/icons/ThumbUp';
import {useParams} from 'react-router-dom'
import { API } from './API/Api';
import { UserContext } from './Context/Contexts';

function SingleBlog() {
    const params = useParams()
    const id = params.id

    const [blog, setBlog] = React.useState(null)
    const [keys, setKeys] = React.useState(0)
    const {userSession, likedBlogs, setLikedBlogs} = React.useContext(UserContext)

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

    const validateUser = (id, currentLikes, flag) =>{
        let body = JSON.stringify({
            token : localStorage.getItem('access_token')
        })
        API.post('auth/jwt/verify/', body, {
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then(data=>{
            console.log('success access : ' + JSON.stringify(data.data))
            if(flag == 1){
                likeBlog(id, currentLikes)
            }else{
                dislikeBlog(id, currentLikes)
            }
        })
        .catch(err=>{
            console.log('err access: ' + err)
            getAccess(id, currentLikes, flag)
    
        })
    }

    const getAccess = (id, currentLikes, flag) =>{
        let body = JSON.stringify({
            refresh : localStorage.getItem('refresh_token')
        })
        API.post('auth/jwt/refresh/', body, {
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then(data=>{
            console.log('success refresh : ' + (data.data.access))
            localStorage.setItem('access_token', data.data.access)
            if(flag == 1){
                likeBlog(id, currentLikes)
            }else{
                dislikeBlog(id, currentLikes)
            }
            
        })
        .catch(err=>{
            console.log('err refresh: ' + err)
            alert('Please Login to like a Blog')
    
        })
    }
    
    const likeBlog = (id, currentLikes) =>{
        console.log('addLikes')
        
        //var blogsTemp = []
        
        let blogsTemp = []
        for(let i in (JSON.parse(likedBlogs))){
            console.log(JSON.parse(likedBlogs)[i])
            blogsTemp.push(JSON.parse(likedBlogs)[i])
        }
        blogsTemp.push(id)
        console.log(blogsTemp)
       
        setLikedBlogs(JSON.stringify(blogsTemp))
        localStorage.setItem('likedBlogs', JSON.stringify(blogsTemp))
        //console.log("after : " + wishList)
        

        let url = "auth/users/me/"
        let body = JSON.stringify({
            
            liked_blogs : blogsTemp
        })
        API.patch(url, body, {
            headers : {
                'Authorization' : 'JWT ' + localStorage.getItem('access_token'),
                'Content-Type' : 'application/json'
            }
        })
        .then(data =>{
            console.log(JSON.stringify(data.data))
            addLike(id, currentLikes)
        })
        .catch(err=>{
            console.log(err)
        })

        
    }

    const addLike = (id, currentLikes) =>{
        let blogsTemp = blog
        blogsTemp.likes = blogsTemp.likes + 1
        setBlog(blogsTemp)
        setKeys(keys+1)
        /*
        for(let i in blogsTemp){
            if(blogsTemp[i].id == id){
                
                blogsTemp[i].likes = blogsTemp[i].likes + 1
                //blogsTemp[i].title = 'editedsss'
                console.log(blogsTemp[i].likes)
                setBlog([...blogsTemp])
                break
            }
        }*/

        
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

    const dislikeBlog = (id, currentLikes) =>{
        console.log('dislike')
        let blogsTemp = []
        for(let i in JSON.parse(likedBlogs)){
            console.log(JSON.parse(likedBlogs)[i])
            blogsTemp.push(JSON.parse(likedBlogs)[i])
        }
        //wishListTemp.push(id)
        blogsTemp.splice(blogsTemp.indexOf(id), 1)
        console.log("after delete : " + blogsTemp)
       
        setLikedBlogs(JSON.stringify(blogsTemp))
        localStorage.setItem('likedBlogs', JSON.stringify(blogsTemp))
        //console.log("after : " + wishList)
        

        let url = "auth/users/me/" 
        let body = JSON.stringify({
            liked_blogs : blogsTemp
        })
        API.patch(url, body, {
            headers : {
                'Authorization' : 'JWT ' + localStorage.getItem('access_token'),
                'Content-Type' : 'application/json'
            }
        })
        .then(data =>{
            console.log(JSON.stringify(data.data))
            removeLike(id, currentLikes)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const removeLike = (id, currentLikes) =>{
        let blogsTemp = blog
        blogsTemp.likes = blogsTemp.likes - 1
        //blogsTemp[i].title = 'editedsss'
        console.log(blogsTemp.likes)
        setBlog(blogsTemp)
        setKeys(keys+1)
        /*
        for(let i in blogsTemp){
            if(blogsTemp[i].id == id){
                
                blogsTemp[i].likes = blogsTemp[i].likes - 1
                //blogsTemp[i].title = 'editedsss'
                console.log(blogsTemp[i].likes)
                setBlog([...blogsTemp])
                break
            }
        }*/

        
        let body = JSON.stringify({
            likes : (currentLikes-1)
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
                {userSession?(
                    <>
                    {JSON.stringify(likedBlogs).includes(blog.id)?(
                        <>
                            <UpvoteIcon id="upIconLiked" onClick={() =>{
                                validateUser(blog.id, blog.likes, 0)
                                
                            }}/>
                            <p>{blog.likes}</p>
                        </>
                    ):(
                        <>
                            <UpvoteIcon id="upIcon" onClick={() =>{
                                validateUser(blog.id, blog.likes, 1)
                                
                            }}/>
                            <p>{blog.likes}</p>
                        </>
                    )}
                    </>
                ):(
                    <>
                        <UpvoteIcon id="upIcon" onClick={() =>{
                            alert('Please Login to like a Blog')
                            
                        }}/>
                        <p>{blog.likes}</p>
                    </>
                )}
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
