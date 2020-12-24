import React from 'react'
import './WriteBlog.css'
//import Axios from 'axios'
import { UserContext } from './Context/Contexts'
import {API} from './API/Api'

function WriteBlog() {
    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState('')
    const [contentCount, setContentCount] = React.useState(5000)
    const [coverPhoto, setCoverPhoto] = React.useState('')
    const [success, setSuccess] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [empty, setEmpty] = React.useState(false)
    const [contentLimit, setContentLimit] = React.useState(false)
    const [image, setImage] = React.useState('')

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
        setEmpty(false)
        setContentLimit(false)
        setError(false)
    }
    
    const postBlog = () =>{
        setEmpty(false)
        setContentLimit(false)
        setError(false)

        if(title.trim()==0 || content.trim()==0){
            setEmpty(true)
            return
        }
        if(content.length > 5000){
            setContentLimit(true)
            return
        }
        setLoading(true)
        let body = JSON.stringify({
            title : title,
            content : content,
            publisher_name : JSON.parse(userSession).fname + " " + JSON.parse(userSession).mname + " " + JSON.parse(userSession).lname,
            publisher_dept : JSON.parse(userSession).dept,
            publisher_email : JSON.parse(userSession).email,
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
            setLoading(false)
        })
        .catch(err =>{
            console.log(err)
            setError(true)
            setLoading(false)
        })
    }

    if(success){
        setLoading(false)
        setSuccess(false)
        setTitle('')
        setContent('')
        alert('Blog Posted Successfully')
    }else    
    return (
        <div id="writeBlogBlock">
            <h3>Post A Blog</h3>
            <strong>Blog Title</strong>
            <input type="text" value={title} placeholder="Enter Blog Title" onChange={(e)=>{
                setTitle(e.target.value)
            }}/>
            <strong>Blog Content<span id="characterCount">{contentCount} characters</span></strong>
            <textarea type="text" value={content} placeholder="Blog Content" onChange={(e)=>{
                setContent(e.target.value)
                setContentCount(...[5000 - e.target.value.length])
            }}/>
            <strong>Choose a cover picture</strong>
            <input type="file" onChange={handleChangeImage} /> 

            {empty?(
                <div id='empty' align='center'>
                    <p>Fields cannot be Empty</p>
                </div>
            ):(null)}

            {contentLimit?(
                <div id='empty' align='center'>
                    <p>Content cannot exceeds more than 5000 characters</p>
                </div>
            ):(null)}

            {error?(
                <div id='empty' align='center'>
                    <p>Something Error Occured</p>
                </div>
            ):(null)}
            {loading?(
                <div align='center'>
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            ):(null)}
            <div id="blogButtons">
                <button id="clearBlogBtn" onClick={clearAll}>Clear</button>
                <button id="postBlogBtn" onClick={postBlog}>Post</button>
            </div>
            
        </div>
    )
}

export default WriteBlog
