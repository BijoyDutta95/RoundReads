import React from 'react'
import LockIcon from '@material-ui/icons/Lock';
import './Reset.css'
import { useParams } from 'react-router-dom';
import { API } from './API/Api';
import Success from './Success';
import { UserContext } from './Context/Contexts';
import {Redirect} from 'react-router-dom'
import VisibilityIcon from '@material-ui/icons/Visibility';


export default function ChangePass2(){
    const [success, setSuccess] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const [currentPass, setCurrentPass] = React.useState('')
    const [newPass, setNewPass] = React.useState('')
    const [confirmPass, setConfirmPass] = React.useState('')
    const [redirect, setRedirect] = React.useState(false)

    const {userSession} = React.useContext(UserContext)
    const [mismatch, setMismatch] = React.useState(false)
    const [minLength, setMinLength] = React.useState(false)
    const [showCur, setShowCur] = React.useState(false)
    const [showNew, setShowNew] = React.useState(false)
    const [showCon, setShowCon] = React.useState(false)

    const validateUser = () =>{
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
            changePass()
        })
        .catch(err=>{
            console.log('err access: ' + err)
            getAccess()
    
        })
    }

    const getAccess = () =>{
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
            changePass()
        })
        .catch(err=>{
            console.log('err refresh: ' + err)
            setError(true)
            setLoading(false)
    
        })
    }
    
    const changePass = () =>{
        setLoading(true)
        let body = JSON.stringify({
            new_password : newPass,
            re_new_password : confirmPass,
            current_password : currentPass
        })
        API.post('auth/users/set_password/', body, {
            headers: {
                'Authorization' : 'JWT ' + localStorage.getItem('access_token'),
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
        setTimeout(() => {
                setRedirect(true)
        
        }, 5000)
    }

    if(redirect){
        return(
            <Redirect to='/user_account'/>
        )
    }

    if(!userSession){
        return <Redirect to='/'/>
    }
    
    return (
        <div id="resetPassword">
            <>
                <LockIcon id="lockIcon"/>
                <h3>Enter New Password</h3>
            </>
            {success?(
                <>
                <Success/>
                <p >Password Successfully changed, Redirecting to User Profile ...</p>
                </>
            ):(
            <div id="passwordDetail">
                {showCur?(
                    <div id='passField'>
                        <input type="text" id="newPassword" placeholder="Enter Current Password" value={currentPass} onChange={(e) => setCurrentPass(e.target.value)}/>
                        <VisibilityIcon id='showPass' onClick={() => setShowCur(false)}/>
                    </div>
                ):(
                    <div id='passField'>
                        <input type="password" id="newPassword" placeholder="Enter Current Password" value={currentPass} onChange={(e) => setCurrentPass(e.target.value)}/>
                        <VisibilityIcon id='hidePass' onClick={() => setShowCur(true)}/>
                    </div>
                )}
                {showNew?(
                    <div id='passField'>
                        <input type="text" id="newPassword" placeholder="Enter New Password" value={newPass} onChange={e => {
                            setNewPass(e.target.value)
                            if(e.target.value.length < 8){
                                setMinLength(true)
                            }else{
                                setMinLength(false)
                            }
                        }}/>
                        <VisibilityIcon id='showPass' onClick={() => setShowNew(false)}/>
                    </div>
                    
                ):(
                    <div id='passField'>
                        <input type="password" id="newPassword" placeholder="Enter New Password" value={newPass} onChange={e => {
                            setNewPass(e.target.value)
                            if(e.target.value.length < 8){
                                setMinLength(true)
                            }else{
                                setMinLength(false)
                            }
                        }}/>
                        <VisibilityIcon id='hidePass' onClick={() => setShowNew(true)}/>
                    </div>
                    
                )}
                
                {minLength?(
                    <p id='loginError' align='center'>Password Minimum Length should be 8</p>
                ):(null)}
                {showCon?(
                    <div id='passField'>
                        <input type="text" id="newPassword" placeholder="Re-enter New Password" value={confirmPass} onChange={e => {
                            setConfirmPass(e.target.value)
                            if(e.target.value != newPass){
                                setMismatch(true)
                            }else{
                                setMismatch(false)
                            }
                        }}/>
                        <VisibilityIcon id='showPass' onClick={() => setShowCon(false)}/>
                    </div>
                ):(
                    <div id='passField'>
                        <input type="password" id="newPassword" placeholder="Re-enter New Password" value={confirmPass} onChange={e => {
                            setConfirmPass(e.target.value)
                            if(e.target.value != newPass){
                                setMismatch(true)
                            }else{
                                setMismatch(false)
                            }
                        }}/>
                        <VisibilityIcon id='hidePass' onClick={() => setShowCon(true)}/>
                    </div>
                )}
                
                        
                {mismatch?(
                    <p id='loginError' align='center'>Password Mismatch</p>
                ):(null)}
                {error?(
                    <p id='loginError'>Something error occured !!!</p>
                ):(null)}

                <button id="confirmPassword" onClick={validateUser}>Change Password</button>
                {loading?(
                     <div align='center'>
                        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div>
                ):(null)}
            </div>
            )}
            
        </div>
    )
}