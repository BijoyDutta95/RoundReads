import React from 'react'
import './AccountDetail.css'
function AccountDetail() {
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
                                        <input type="text" placeholder="Fisrt Name" name="fname"></input>
                                        <input type="text" placeholder="Middle Name" name="mname"></input>
                                        <input type="text" placeholder="Last Name" name="lname" ></input>
                                    </div>
                                </div>
                                <div className="inputField">
                                    <label for="mail"><b>Mail ID</b></label>
                                    <input type="text" placeholder="uchiha@gmail.com" name="mail"></input>
                                </div>
                                <div className="inputField">
                                    <label for="phone"><b>Phone Number</b></label>
                                    <input type="text" placeholder="8475220025" name="phone"></input>
                                </div>
                                <div className="inputField">
                                    <label for="address"><b>Permanent Address</b></label>
                                    <textarea id="textArea" type="text" placeholder="221B Baker Street, London" name="add" required></textarea>
                                </div>
                                
                            </form>
                    </fieldset>

                    <fieldset className="otherDetail">
                        <legend>Other Details</legend>
                            <form>
                            
                                <div className="inputField">
                                    <label for="yoe"><b>Year of Enrolment</b></label>
                                    <input type="text" placeholder="2018" name="yoe"></input>
                                </div>
                                <div className="inputField">
                                    <label for="yog"><b>Year of Graduation</b></label>
                                    <input type="text" placeholder="2021" name="yog"></input>
                                </div>
                                <div className="inputField">
                                    <label for="dept"><b>Department</b></label>
                                    <input type="text" placeholder="CSE" name="dept"></input>
                                </div>
                                <div className="inputField">
                                    <label for="rollno"><b>Roll Number</b></label>
                                    <input type="text" placeholder="CSM18031" name="dept"></input>
                                </div>
                                <div className="inputField">
                                    <label for="hostel"><b>Hostel Name</b></label>
                                    <input type="text" placeholder="Nilachal Men's Hostel" name="hostel"></input>
                                </div>
                                
                            </form>
                    </fieldset>
                    
                    <div id="buttonsDiv">
                        <button type='submit' id="submitButton"><b>Update Details</b></button>
                    </div>
                </div>
            </div>
    )
}

export default AccountDetail
