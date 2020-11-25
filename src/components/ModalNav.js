import React, {useContext} from 'react'
import './ModalNav.css'
import { UserContext } from './UserContext';

function ModalNav() {
    const {flag,setFlag} = useContext(UserContext);
    return (

        <div className="ModalNavBlock">
            <div onClick={()=>setFlag(true)}  id="navLogin" > LOGIN </div>
            <div onClick={()=>setFlag(false)} id="navSignup" > SIGN-UP </div> 
        </div>
    )
}

export default ModalNav
