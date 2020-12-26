import React from 'react'
import LockIcon from '@material-ui/icons/Lock';
import './Reset.css'
import { useParams } from 'react-router-dom';
import { API } from './API/Api';
import Success from './Success';
import VisibilityIcon from '@material-ui/icons/Visibility';

function EnterPassword() {
    const params = useParams()
    const [password, setPassword] = React.useState('')
    const [repassword, setRepassword] = React.useState('')
    const [success, setSuccess] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const [showPass, setShowPass] = React.useState(false)
    const [showRepass, setShowRepass] = React.useState(false)
    const [mismatch, setMismatch] = React.useState(false)

    const updatePassword = () =>{
        setLoading(true)
        setSuccess(false)
        setError(false)
        let body = JSON.stringify({
            uid : params.uid,
            token : params.token,
            new_password : password,
            re_new_password : repassword
        })
        API.post('auth/users/reset_password_confirm/', body, {
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then(data =>{
            console.log(data)
            setLoading(false)
            setSuccess(true)
        })
        .catch(err=>{
            console.log(err)
            setLoading(false)
            setError(true)
        })
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
                <p >Password Successfully changed, Please login to your Account !!!</p>
                </>
            ):(
            <div id="passwordDetail">
                <div id='passField'>
                    {showPass?(
                        
                        <>
                        <input type="text" id="newPassword" placeholder="Enter New Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <VisibilityIcon id='showPass' onClick={() => setShowPass(false)}/>
                        </>
                    ):(
                        <>
                        <input type="password" id="newPassword" placeholder="Enter New Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <VisibilityIcon id='hidePass' onClick={() => setShowPass(true)}/>
                        </>
                    )}
               
                </div>
                <div id='passField'>
                    {showRepass?(
                        <>
                        <input type="text" id="newPassword" placeholder="Re-enter Password" value={repassword} onChange={e => {
                            setRepassword(e.target.value)
                            
                            if(e.target.value != password){
                                setMismatch(true)
                            }else{
                                setMismatch(false)
                            }
                        }}/>
                        <VisibilityIcon id='showPass' onClick={() => {setShowRepass(false)}}/>
                        </>
                    ):(
                        <>
                        <input type="password" id="newPassword" placeholder="Re-enter Password" value={repassword} onChange={e => {
                            setRepassword(e.target.value)
                            //setRepassword(e.target.value)
                            
                            if(e.target.value != password){
                                setMismatch(true)
                            }else{
                                setMismatch(false)
                            }
                        }}/>
                        <VisibilityIcon id='hidePass' onClick={() => setShowRepass(true)}/>
                        </>
                    )}
                    
                </div>
                {mismatch?(
                    <p align='center' id='loginError'>Password Mismatch</p>
                ):(null)}
                
                

                {error?(
                    <p id='loginError' align='center'>Something error occured !!!</p>
                ):(null)}

                <button id="confirmPassword" onClick={updatePassword}>Update</button>
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

export default EnterPassword
