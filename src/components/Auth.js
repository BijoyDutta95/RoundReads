import React, {useContext} from 'react'
import Login from './Login'
import Signup from './Signup'
import { ModalContext } from './Context/Contexts';


function Auth() {
    const {flag} = useContext(ModalContext);

    if(flag){
        return (
            <div>
                <Login/>
            </div>
        )
    }
    else{
        return (
            <div>
                <Signup/>
            </div>
        )
    }

    
}

export default Auth
