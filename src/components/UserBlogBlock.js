import React from 'react'
import './UserBlogBlock.css'
import DeleteIcon from '@material-ui/icons/Delete';
import UpvoteIcon from '@material-ui/icons/ThumbUp';
import { API } from './API/Api';
import { UserContext } from './Context/Contexts';
import { Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Keyboard from '../icons/blogkey.svg';


function UserBlogBlock() {
    const [blogs, setBlogs] = React.useState([])
    const [readClicked, setReadClicked] = React.useState(false)
    const [currentBlog, setCurrentBlog] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const {userSession} = React.useContext(UserContext)
    const [open, setOpen] = React.useState(false);
    const [key, setKey] = React.useState(0);

    React.useEffect(() =>{
        function getBlogs(){
            console.log('getBlogs')
            setLoading(true)
            API.get('api/user_blogs/?search=' + JSON.parse(userSession).email)
            .then(data=>{
                console.log(data.data)
                setBlogs(data.data)
                setLoading(false)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        getBlogs()
    }, [key])

    const deleteBlog = (id) =>{
        API.delete('api/blogs/' + id)
        .then(data =>{
            console.log(data.data)
            setKey(key+1)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const renderBlogs = (blog, index) =>{
        return (
            <div id="singleBlogCard" key={index}>
                    <img src={blog.cover_photo} alt="blogImage" id="blogPhoto"/>
                    <div id="userBlogInfo">
                        <div id="blogTopBlock">
                            <div id="blogItemDetail">
                                <strong>{blog.title}</strong>
                                <small>{blog.date_published.substring(0,10)}</small>                  
                            </div>
                            <DeleteIcon id="deleteBlog" onClick={handleClickOpen}/>

                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Blog will be Removed Permanently !!!
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={() =>{
                                        handleClose()
                                        deleteBlog(blog.id)
                                    }} color="primary" autoFocus>
                                    Delete
                                </Button>
                                </DialogActions>
                            </Dialog>


                        </div>
                        <div id="singleBlogBtn">
                            <div id="upvoteCount">
                                <UpvoteIcon id="upIconLiked"/>
                                <p>{blog.likes}</p>
                            </div>
                            <button id="readOwnBlog" onClick={() =>{
                                setReadClicked(true)
                                setCurrentBlog(blog.id)
                            }}>Read Blog</button>
                        </div>
                    </div>
            </div>
        )
    
    }

    if(readClicked && currentBlog){
        console.log('readssssssssss')
        return (
            <Redirect to={'currentBlog/' + currentBlog}/>
        )
    }
    if(loading){
        return(
            <div align='center'>
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }else
    if(blogs.length == 0){
        return(
            <div id="noBlog">
                <p>No Blogs Yet!</p>
                <p>Share Your Experience with a Book. Smash the Keyboard!</p>
                <img src={Keyboard} alt="mailbox" id="keyImage"/>
            </div>
        )
    }else

    return(
        <div id='blogCardBlock'>
            {blogs.map(renderBlogs)}
        </div>
    )
}

export default UserBlogBlock
