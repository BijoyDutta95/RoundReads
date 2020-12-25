import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import './Reset.css'
import { API } from './API/Api';
function EnterID() {
    const [email, setEmail] = React.useState('')
    const [success, setSuccess] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const sendRequest = () =>{
        setLoading(true)
        setSuccess(false)
        setError(false)
        console.log('semail send ::  ' + email)
        let body = JSON.stringify({
            email : email
        })
        API.post('auth/users/reset_password/', body, {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((data)=>{
            setSuccess(true)
            setLoading(false)
            setEmail('')
        })
        .catch(err =>{
            console.log('error ::  ' + err)
            setError(true)
            setLoading(false)
        })
    }


    return (    
        <div id="enterMailBlock">
            <>
                <EmailIcon id="emailIcon"/>
                <h3>Enter Your Registered Mail ID</h3>
            </>
            
            {error?(
                <p id='loginError'>Something error occured, Please input a correct Email !!!</p>
            ):(null)}

            {success?(
                <p>A verification mail has been sent to your registered Email ID, Please Check you mail box !!!</p>
            ):(null)}
            
            <div id="idDetails">
                <input type="text" id="mailID" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button id="sendResetRequest" onClick={sendRequest}>Send Request</button>
            </div>
            
            {loading?(
                <div align='center'>
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            ):(null)}
        </div>
    )
}

export default EnterID
