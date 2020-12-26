import React from 'react'
import LockIcon from '@material-ui/icons/Lock';
import './AccountInfo.css'
import { Redirect } from 'react-router-dom';

function ChangePass() {
    const [clicked, setClicked] = React.useState(false)

    if(clicked){
        return <Redirect to='/changePass'/>
    }

    return (
        <div id="changePass" onClick={() => setClicked(true)}>
            <LockIcon id="passIcon"/>
            <p>Change Password</p>
        </div>
    )
}

export default ChangePass