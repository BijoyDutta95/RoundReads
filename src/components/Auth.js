import React, {useContext} from 'react'
import Login from './Login'
import Signup from './Signup'
import { UserContext } from './UserContext';


function Auth() {
    const {flag,setFlag} = useContext(UserContext);

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
