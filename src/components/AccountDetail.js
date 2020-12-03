import React from 'react'
import './AccountDetail.css'
import axios from 'axios'
import { UserContext } from './Context/Contexts'


function AccountDetail() {
    
    const [fname, setFname] = React.useState(JSON.parse(sessionStorage.getItem('user')).fname)
    const [mname, setMname] = React.useState(JSON.parse(sessionStorage.getItem('user')).mname)
    const [lname, setLname] = React.useState(JSON.parse(sessionStorage.getItem('user')).lname)
    const [email] = React.useState(JSON.parse(sessionStorage.getItem('user')).email)
    const [phone, setPhone] = React.useState(JSON.parse(sessionStorage.getItem('user')).phone)
    const [address, setAddress] = React.useState(JSON.parse(sessionStorage.getItem('user')).address)
    const [yearOfEnrollment, setYearOfEnrollment] = React.useState(JSON.parse(sessionStorage.getItem('user')).yearOfEnrollment)
    const [yearOfGraduation, setYearOfGraduation] = React.useState(JSON.parse(sessionStorage.getItem('user')).yearOfGraduation)
    const [dept, setdept] = React.useState(JSON.parse(sessionStorage.getItem('user')).dept)
    const [roll, setRoll] = React.useState(JSON.parse(sessionStorage.getItem('user')).roll)
    const [hostel, setHostel] = React.useState(JSON.parse(sessionStorage.getItem('user')).hostel)
    const [password, setPassword] = React.useState("")
    
    const [updateClicked, setUpdateClicked] = React.useState(false)
    const {setUser} = React.useContext(UserContext)

    const handleUpdate = () => {
        setUpdateClicked(true)
    }

    const verifyUser = () =>{
        let url = "http://localhost:8000/auth/jwt/create/"
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
            console.log(data.data.access)
            sessionStorage.setItem('access_token', data.data.access)
            patchUserDetails(data.data.access)

        })
        .catch(err =>{
            console.log(err)
        })
    }

    const patchUserDetails = (token) =>{
        console.log(fname)
        console.log(mname)
        console.log(lname)
        console.log(phone)
        console.log(address)
        console.log(yearOfEnrollment)
        console.log(yearOfGraduation)
        console.log(dept)
        console.log(roll)
        console.log(hostel)
        console.log(email)

        let body = JSON.stringify({
            'fname' : fname,
            'mname' : mname,
            'lname' : lname,
            'phone' : phone,
            'address' : address,
            'yearOfEnrollment' : yearOfEnrollment,
            'yearOfGraduation' : yearOfGraduation,
            'dept' : dept,
            'roll' : roll,
            'hostel' : hostel
        })

        let url = "http://localhost:8000/auth/users/me/"

        axios.patch(url, body, {
            headers: {
                'Authorization' : 'JWT ' + token,
                'Content-Type' : 'application/json'
            }
        })
        .then(data =>{
            console.log(JSON.stringify(data.data))
            sessionStorage.setItem('user', JSON.stringify(data.data))
            setUser(JSON.stringify(data.data))
            setUpdateClicked(false)
        })
        .catch(err =>{
            console.log("error  " + err)
        })
    }
    
    if(updateClicked){
        return(
            <div>
               <div id="detailBlock">
                <h2>Verify that its You</h2>
                <div className="formField">
                    <fieldset className="personalDetail">
                    <div className="inputField">
                        <label for="name"><b>Enter the Password for {email}</b></label>
                        <div id="names">
                            <input type="password" value={password} placeholder="Enter Password" name="password" onChange={(e) =>{ setPassword(e.target.value) }}></input>
                        </div>
                        <div id="buttonsDiv">
                            <button  id="submitButton" onClick={verifyUser}><b>Verify</b></button>
                        </div>
                    </div>  
                    </fieldset>
                </div>
                </div> 
            </div>
        )
    }

    return (
        <div id="detailBlock">
                <h2>USER PROFILE</h2>
                <div className="formField">
                    <fieldset className="personalDetail">
                        <legend>Personal Details</legend>
                            <form>
                                <div className="inputField">
                                    <label for="name"><b>Name</b></label>
                                    <div id="names">
                                        <input type="text" value={fname} name="fname" onChange={(e) =>{ setFname(e.target.value) }}></input>
                                        <input type="text"  value={mname} name="mname" onChange={(e) =>{ setMname(e.target.value) }}></input>
                                        <input type="text"  value={lname} name="lname" onChange={(e) =>{ setLname(e.target.value) }}></input>
                                    </div>
                                </div>
                                <div className="inputField">
                                    <label for="mail"><b>Mail ID</b></label>
                                    <input type="text"  placeholder={email} name="email" readOnly></input>
                                </div>
                                <div className="inputField">
                                    <label for="phone"><b>Phone Number</b></label>
                                    <input type="text" value={phone} name="phone" onChange={(e) =>{ setPhone(e.target.value) }}></input>
                                </div>
                                <div className="inputField">
                                    <label for="address"><b>Permanent Address</b></label>
                                    <textarea id="textArea" type="text" value={address} name="address" onChange={(e) =>{ setAddress(e.target.value) }} required></textarea>
                                </div>
                                
                            </form>
                    </fieldset>

                    <fieldset className="otherDetail">
                        <legend>Other Details</legend>
                            <form>
                            
                                <div className="inputField">
                                    <label for="yoe"><b>Year of Enrolment</b></label>
                                    <input type="text" value={yearOfEnrollment} name="yearOfEnrollment" onChange={(e) =>{ setYearOfEnrollment(e.target.value) }}></input>
                                </div>
                                <div className="inputField">
                                    <label for="yog"><b>Year of Graduation</b></label>
                                    <input type="text" value={yearOfGraduation} name="yearOfGraduation" onChange={(e) =>{ setYearOfGraduation(e.target.value) }}></input>
                                </div>
                                <div className="inputField">
                                    <label for="dept"><b>Department</b></label>
                                    <input type="text" value={dept} name="dept" onChange={(e) =>{ setdept(e.target.value) }}></input>
                                </div>
                                <div className="inputField">
                                    <label for="rollno"><b>Roll Number</b></label>
                                    <input type="text" value={roll} name="roll" onChange={(e) =>{ setRoll(e.target.value) }}></input>
                                </div>
                                <div className="inputField">
                                    <label for="hostel"><b>Hostel Name</b></label>
                                    <input type="text" value={hostel} name="hostel" onChange={(e) =>{ setHostel(e.target.value) }}></input>
                                </div>
                                
                            </form>
                    </fieldset>
                    
                    <div id="buttonsDiv">
                        <button  id="submitButton" onClick={handleUpdate}><b>Update Details</b></button>
                    </div>
                </div>
            </div>
    )
}

export default AccountDetail
