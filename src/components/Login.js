import React from 'react'
import './Login.css'
import { API } from './API/Api'
import { UserContext, ModalContext } from './Context/Contexts';

function Login(){

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const {setDisplay} = React.useContext(ModalContext)
    const {setUser, setUserSession, setWishList, wishList} = React.useContext(UserContext)

    const handleLogin = (e) =>{
        e.preventDefault();

        let url = "auth/jwt/create/"
        let body = JSON.stringify({
            email : email,
            password : password
        })

        API.post(url, body, {
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
        let url = "auth/users/me/"
        API.get(url,{
            headers: {
                'Authorization' : 'JWT ' + sessionStorage.getItem('access_token')
            }
        })
        .then(data => {
            console.log("success : " + JSON.stringify(data))
            setUser(JSON.stringify(data.data))
            sessionStorage.setItem('user', JSON.stringify(data.data))
            setUserSession(JSON.stringify(data.data))
            setDisplay(false)
            getWishList(data.data.id)
            
        })
        .catch(e => {
            console.log("failed catched error : " + e)
            
        });
    }

    const getWishList = (id) =>{
        let url = "api/wishlist/" + id
        API.get(url)
        .then(data => {
            console.log("success wishlist : " + JSON.stringify(data))
            setWishList(JSON.stringify(data.data.wishlist))
            sessionStorage.setItem('wishlist', JSON.stringify(data.data.wishlist))
            
        })
        .catch(e => {
            console.log("failed catched error wishlist : " + e)
            
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