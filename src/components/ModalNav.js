import React, {useContext} from 'react'
import './ModalNav.css'
import { UserContext } from './UserContext';

function ModalNav() {
    const {flag,setFlag} = useContext(UserContext);

    
    return (

        <div className="ModalNavBlock">
            <div onClick={()=>setFlag(true)}  id={flag?"navLoginTrue":"navLoginFalse"} > LOGIN </div>
            <div onClick={()=>setFlag(false)} id={flag?"navSignupTrue":"navSignupFalse"} > SIGN-UP </div> 
        </div>
    )
}
export default ModalNav
