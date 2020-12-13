import './MessageNav.css'
import React from 'react'
import { MessageContext } from './Context/Contexts'
export default function MessageNav(){
    const {setPendingClicked, setAcceptedClicked, setDeclinedClicked,
            acceptedCount, pendingCount, declinedCount} = React.useContext(MessageContext)
    
    return (
        <div id='messageNav'>
            <p id='messageNavItem' onClick={() =>{
                setPendingClicked(true)
                setAcceptedClicked(false)
                setDeclinedClicked(false)
            }}>Pending ({pendingCount})</p>
            <p id='messageNavItem' onClick={() =>{
                setPendingClicked(false)
                setAcceptedClicked(true)
                setDeclinedClicked(false)
            }}>Accepted ({acceptedCount})</p>
            <p id='messageNavItem' onClick={() =>{
                setPendingClicked(false)
                setAcceptedClicked(false)
                setDeclinedClicked(true)
            }}>Declined ({declinedCount})</p>
        </div>
    )
}