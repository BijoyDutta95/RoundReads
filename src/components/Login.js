import React from 'react'
import './Login.css'
import axios from 'axios'
import { UserContext } from './Context/UserContext';
import { ModalContext } from './Context/ModalContext';
//import Login from './Login2'

function Login(){

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const {setDisplay} = React.useContext(ModalContext)
    const {setName} = React.useContext(UserContext)

    const handleLogin = (e) =>{
        e.preventDefault();

        let url = "http://127.0.0.1:8000/auth/jwt/create/"
        let body = JSON.stringify({
            email : email,
            password : password
        })

        axios.post(url, body, {
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(data =>{
            console.log((data.data.refresh))
            sessionStorage.setItem('refresh_token', data.data.refresh)
            sessionStorage.setItem('access_token', data.data.access)
            getUserData()
        })
        .catch(e =>{
            console.log(e)
        })
    }

    const getUserData = () =>{
        let url = "http://127.0.0.1:8000/auth/users/me/"
        axios.get(url,{
            headers: {
                'Authorization' : 'JWT ' + sessionStorage.getItem('access_token')
            }
        })
        .then(data => {
            console.log("success : " + JSON.stringify(data))

            //this.props.setName(data.data.fname)
            setName(data.data.fname)
            sessionStorage.setItem('fname', (data.data.fname))
            sessionStorage.setItem('email', (data.data.email))
            
            setDisplay(false)
        })
        .catch(e => {
            console.log("failed catched error : " + e)
            
        });
    }
    
    
    return (
        <div className="loginForm">
            <form>
                <div className="inputField">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} required></input>
                </div>
                <div className="inputField">
                    <label for="pwd"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} required></input>
                </div>
                <button type="submit" onClick={handleLogin}>LOGIN</button>
                <div id="bottomText">
                    <label>
                        <input type="checkbox" name="remember"></input> Remember me
                    </label>
                    <small>Forgot Password?</small>
                </div>
            </form>
        </div>
    )
    
    
}

export default Login