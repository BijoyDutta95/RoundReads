import React from 'react'
import './AccountDetail.css'
import { UserContext } from './Context/Contexts'
import { API } from './API/Api'

function AccountDetail() {
    
    const [fname, setFname] = React.useState(JSON.parse(localStorage.getItem('user')).fname)
    const [mname, setMname] = React.useState(JSON.parse(localStorage.getItem('user')).mname)
    const [lname, setLname] = React.useState(JSON.parse(localStorage.getItem('user')).lname)
    const [email] = React.useState(JSON.parse(localStorage.getItem('user')).email)
    const [phone, setPhone] = React.useState(JSON.parse(localStorage.getItem('user')).phone)
    const [address, setAddress] = React.useState(JSON.parse(localStorage.getItem('user')).address)
    const [yearOfEnrollment, setYearOfEnrollment] = React.useState(JSON.parse(localStorage.getItem('user')).yearOfEnrollment)
    const [yearOfGraduation, setYearOfGraduation] = React.useState(JSON.parse(localStorage.getItem('user')).yearOfGraduation)
    const [dept, setdept] = React.useState(JSON.parse(localStorage.getItem('user')).dept)
    const [roll, setRoll] = React.useState(JSON.parse(localStorage.getItem('user')).roll)
    const [hostel, setHostel] = React.useState(JSON.parse(localStorage.getItem('user')).hostel)
    const [password, setPassword] = React.useState("")
    
    const {setUserSession} = React.useContext(UserContext)

    const validateUser = () =>{
        let body = JSON.stringify({
            token : localStorage.getItem('access_token')
        })
        API.post('auth/jwt/verify/', body, {
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then(data=>{
            console.log('success access : ' + JSON.stringify(data.data))
            patchUserDetails()
        })
        .catch(err=>{
            console.log('err access: ' + err)
            getAccess()
    
        })
    }

    const getAccess = () =>{
        let body = JSON.stringify({
            refresh : localStorage.getItem('refresh_token')
        })
        API.post('auth/jwt/refresh/', body, {
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then(data=>{
            console.log('success refresh : ' + (data.data.access))
            localStorage.setItem('access_token', data.data.access)
            patchUserDetails()
            
        })
        .catch(err=>{
            console.log('err refresh: ' + err)
            alert('Please Login')
    
        })
    }

    const patchUserDetails = () =>{
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

        let url = "auth/users/me/"

        API.patch(url, body, {
            headers: {
                'Authorization' : 'JWT ' + localStorage.getItem('access_token'),
                'Content-Type' : 'application/json'
            }
        })
        .then(data =>{
            console.log(JSON.stringify(data.data))
            localStorage.setItem('user', JSON.stringify(data.data))
            setUserSession(JSON.stringify(data.data))
            //setUpdateClicked(false)
        })
        .catch(err =>{
            console.log("error  " + err)
        })
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
                        <button  id="submitButton" onClick={validateUser}><b>Update Details</b></button>
                    </div>
                </div>
            </div>
    )
}

export default AccountDetail
