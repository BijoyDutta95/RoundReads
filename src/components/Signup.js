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

    const [fieldsEmpty, setFieldsEmpty] = React.useState(false)
    const [invalidEmail, setInvalidEmail] = React.useState(false)
    const [passwordMismatch, setPasswordMismatch] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const {setFlag} = React.useContext(ModalContext)

    const validateEmail = (email) =>{
        if(email.length == 0){
            setInvalidEmail(false)
            return
        }
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(email).toLowerCase())){
            setInvalidEmail(false)
        }else{
            setInvalidEmail(true)
        }
    }
    const validatePassword = (pass2) =>{
        if(password != pass2){
            setPasswordMismatch(true)
        }else{
            setPasswordMismatch(false)
        }
    }

    const handleSignup = (e) =>{
        e.preventDefault();
       
        setFieldsEmpty(false)
        setError(false)

        if(fname.trim() == '' || lname.trim() == '' || email.trim() == '' || password.trim() == '' || repassword.trim() == ''){
            setFieldsEmpty(true)
            return
        }else{
            setLoading(true)
        }
        
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
            'hostel' : '',
            'wishlist' : [],
            'liked_blogs' : []
        })

        API.post(url, body, {
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then(data =>{
            console.log("success : " + JSON.stringify(data))
            //createWishList(data.data.id)
            setLoading(false)
            setFlag(true)
        })
        .catch(err => {
            console.log("error here : " + err)
            setError(true)
            setLoading(false)
            setFlag(true)
        })

    }

    /*const createWishList = (id) =>{
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
            setLoading(false)
        })
    }*/

    
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
                    <input type="text" placeholder="Enter Email" name="email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                        validateEmail(e.target.value)
                    }} required></input>
                </div>
                {invalidEmail?(
                    <div id='signupError'>
                        <p>Invalid Email</p>
                    </div>
                ):(null)}

                <div className="inputField">
                    <label for="pwd"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <div className="inputField">
                    <label for="pwd"><b>Confirm Password</b></label>
                    <input type="password" placeholder="Enter Password" name="repassword" value={repassword} onChange={(e) => {
                        setRepassword(e.target.value)
                        validatePassword(e.target.value)
                    }} required></input>
                </div>
                {passwordMismatch?(
                    <div id='signupError'>
                        <p>Password Mismatch</p>
                    </div>
                ):(null)}

                {fieldsEmpty?(
                    <div id='signupError'>
                        <p>Fields cannot be Empty</p>
                    </div>
                ):(null)}
                {error?(
                    <div id='signupError'>
                        <p>Email Already Exist</p>
                    </div>
                ):(null)}

                <button type="submit" onClick={handleSignup} >Register</button>
                
                {loading?(
                    <div align='center'>
                        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div>
                ):(
                   null
                )}
            </form>
        </div>
    )

    
}

export default Signup