import React from 'react'
import './ActivateUser.css'
import { useParams, Redirect } from 'react-router-dom'
import { API } from '../API/Api'

export default function ActivateUser(){
    let params = useParams()

    const [success, setSucess] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [redirect, setRedirect] = React.useState(false)

    React.useEffect(() =>{
        console.log('user activating')
        let body = JSON.stringify({
            token : params.token,
            uid : params.uid
        })
        API.post('auth/users/activation/', body, {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(data =>{
            console.log(data.data)
            setSucess(true)
            setLoading(false)
        })
        .catch(err=>{
            console.log(err)
            setError(true)
            setLoading(false)
        })
    }, [])

    if(error || success){
        setTimeout(() => {
                setRedirect(true)
        
        }, 5000)
    }

    if(redirect){
        return(
            <Redirect to='/'/>
        )
    }
    

    return(
        <div align='center' id='globalBlock'>
            {loading?(
                <div id='activating'>
                    <h1>Activating Your Account Please Wait ...</h1>
                </div>
            ):(null)}
            
            {error?(
                <div id='activating'>
                    <h1>Something Error Occured, Redirecting to Home Page...</h1>
                </div>
            ):(null)}

            {success?(
                <div id='activating'>
                    <h1>Account Activated Successfully, Redirecting to Home Page...</h1>
                </div>
            ):(null)}

            <div align='center'>
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>

            </div>
            
        
    )

    
   
}