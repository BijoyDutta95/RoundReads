import React from 'react'
import './Login.css'
function Login() {
    return (
        <div className="loginForm">
            <form>
                <div className="inputField">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Email " name="uname" required></input>
                </div>
                <div className="inputField">
                    <label for="pwd"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="pwd" required></input>
                </div>
                <button type="submit">LOGIN</button>
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
