import React from 'react'
import './Signup.css'

function Signup() {
    return (
        <div id="signUpForm">
            <form>
                <div className="inputField">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required></input>
                </div>
                <div className="inputField">
                    <label for="pwd"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="pwd" required></input>
                </div>
                <div className="inputField">
                    <label for="pwd"><b>Confirm Password</b></label>
                    <input type="password" placeholder="Enter Password" name="pwd" required></input>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Signup