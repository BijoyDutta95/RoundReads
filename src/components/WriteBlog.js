import React from 'react'
import './WriteBlog.css'
//import Axios from 'axios'
import { UserContext } from './Context/Contexts'
import {API} from './API/Api'

function WriteBlog() {
    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState('')
    const [coverPhoto, setCoverPhoto] = React.useState('')
    const [success, setSuccess] = React.useState(false)
    const [error, setError] = React.useState(false)

    const {userSession} = React.useContext(UserContext)

    const handleChangeImage = (event) =>{
        let file = event.target.files[0]
    	
    	if(file){
    		const reader = new FileReader();
    		reader.onload = function(readerEvt){
                let binaryString = readerEvt.target.result
                setCoverPhoto('data:image/jpeg;base64,' + btoa(binaryString))
            }
    		reader.readAsBinaryString(file)
    	
        }
        //console.log(image1)
    }

    const clearAll = () =>{
        setTitle('')
        setContent('')
        setCoverPhoto('')
    }
    
    const postBlog = () =>{
        
        let body = JSON.stringify({
            title : title,
            content : content,
            publisher_name : JSON.parse(userSession).fname + " " + JSON.parse(userSession).mname + " " + JSON.parse(userSession).lname,
            publisher_dept : JSON.parse(userSession).dept,
            likes : 0,
            cover_photo : coverPhoto
        })
        
        let url = 'api/blogs/'
        //console.log(body)
        
        API.post(url, body, {
            headers :{
                'Content-Type' : 'application/json'
            }
        })
        .then(data =>{
            console.log(data.data)
            setSuccess(true)
        })
        .catch(err =>{
            console.log(err)
            setError(true)
        })
    }

    if(success){
        return(
            <div className='successMessage'>
                <h3>Post Success</h3>
                <button onClick={() =>setSuccess(false)}>PostAnotherBlog</button>
            </div>
        )
    }else    
    return (
        <div id="writeBlogBlock">
            <h3>Post A Blog</h3>
            <strong>Blog Title</strong>
            <input type="text" value={title} placeholder="Enter Blog Title" onChange={(e)=>setTitle(e.target.value)}/>
            <strong>Blog Content<span id="characterCount">5000 characters</span></strong>
            <textarea type="text" value={content} placeholder="Blog Content" onChange={(e)=>setContent(e.target.value)}/>
            <strong>Choose a cover picture</strong>
            <input type="file" onChange={handleChangeImage}/> 
             
            <div id="blogButtons">
                <button id="clearBlogBtn" onClick={clearAll}>Clear</button>
                <button id="postBlogBtn" onClick={postBlog}>Post</button>
            </div>
        </div>
    )
}

export default WriteBlog
