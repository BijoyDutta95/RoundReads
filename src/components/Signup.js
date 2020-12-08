import React from 'react'
import './Signup.css'
import { API } from './API/Api'
import { ModalContext } from './Context/Contexts'

function Signup(){
    const [fname, setFname] = React.useState("")
    const [mname, setMname] = React.useState("")
    const [lname, setLname] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [repassword, setRepassword] = React.useState("")

    const {setFlag} = React.useContext(ModalContext)

    const handleSignup = (e) =>{
        e.preventDefault();

        
        let url = "auth/users/"
        let body = JSON.stringify({
            'fname' : fname,
            'mname' : mname,
            'lname' : lname,
            'email' : email,
            'password' : password,
            're_password' : repassword,
            'phone' : '',
            'address' : '',
            'yearOfEnrollment' : '',
            'yearOfGraduation' : '',
            'dept' : '',
            'roll' : '',
            'hostel' : ''
        })

        API.post(url, body, {
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then(data =>{
            console.log("success : " + JSON.stringify(data))
            createWishList(data.data.id)
            //setFlag(true)
        })
        .catch(err => {
            console.log("error : " + err)
        })

    }

    const createWishList = (id) =>{
        let url = "api/wishlist/"
        let body = JSON.stringify({
            user_id : id,
            wishlist : []
        })
        API.post(url, body, {
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then((data) =>{
            console.log("wishlist created  " + JSON.stringify(data.data))
            setFlag(true)

        })
    }

    
    return (
        <div id="signUpForm">
            <form>
                <div className="inputField">
                    <label for="uname"><b>Name</b></label>
                    <div id="NameBlock">
                        <input id="fname" type="text" placeholder="First Name" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} required></input>
                        <input id="mname" type="text" placeholder="Middle Name" name="mname" value={mname} onChange={(e) => setMname(e.target.value)} required></input>
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
                <button type="submit" onClick={handleSignup} 
                    
                >Register</button>
            </form>
        </div>
    )

    
}

export default Signup