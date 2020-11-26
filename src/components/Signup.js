import React from 'react'
import './Signup.css'

function Signup() {
    return (
        <div id="signUpForm">
            <form>
                <div className="inputField">
                    <label for="uname"><b>Name</b></label>
                    <div id="NameBlock">
                        <input id="fname" type="text" placeholder="First Name" name="fname" required></input>
                        <input id="lname" type="text" placeholder="Last Name" name="lname" required></input>
                    </div>    
                </div>
                <div className="inputField">
                    <label for="uname"><b>Email ID</b></label>
                    <input type="text" placeholder="Enter Email" name="uname" required></input>
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