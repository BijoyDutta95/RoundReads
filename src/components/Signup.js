import React from 'react'
import './Signup.css'
import axios from 'axios'
import { ModalContext } from './Context/Contexts'

function Signup(){
    const [fname, setFname] = React.useState("")
    const [lname, setLname] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [repassword, setRepassword] = React.useState("")

    const {setFlag} = React.useContext(ModalContext)

    const handleSignup = (e) =>{
        e.preventDefault();

        let url = "http://127.0.0.1:8000/auth/users/"
        let body = JSON.stringify({
            'fname' : fname,
            'lname' : lname,
            'email' : email,
            'password' : password,
            're_password' : repassword,
        })

        axios.post(url, body, {
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then(data =>{
            console.log("success : " + JSON.stringify(data))
            setFlag(true)
        })
        .catch(err => {
            console.log("error : " + err)
        })

    }

    
    return (
        <div id="signUpForm">
            <form>
                <div className="inputField">
                    <label for="uname"><b>Name</b></label>
                    <div id="NameBlock">
                        <input id="fname" type="text" placeholder="First Name" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} required></input>
                        <input id="lname" type="text" placeholder="Last Name" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} required></input>
                    </div>    
                </div>
                <div className="inputField">
                    <label for="uname"><b>Email ID</b></label>
                    <input type="text" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                </div>
                <div className="inputField">
                    <label for="pwd"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <div className="inputField">
                    <label for="pwd"><b>Confirm Password</b></label>
                    <input type="password" placeholder="Enter Password" name="repassword" value={repassword} onChange={(e) => setRepassword(e.target.value)} required></input>
                </div>
                <button type="submit" onClick={handleSignup}>Register</button>
            </form>
        </div>
    )

    
}

export default Signup