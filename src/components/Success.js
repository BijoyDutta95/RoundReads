import React from 'react'
import SuccessIcon from '@material-ui/icons/CheckCircle';
import './Success.css'

function Success() {
    return (
        <div id="successMessage">
            <SuccessIcon id="successIcon"/>
            <p>Successful</p>
        </div>
    )
}

export default Success
