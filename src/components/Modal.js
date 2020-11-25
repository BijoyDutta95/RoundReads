import React, {forwardRef,useImperativeHandle} from 'react';
import ModalNav from './ModalNav'
import './Modal.css'
import './ModalNav.css'
import { UserContext } from './UserContext';
import Auth from './Auth';
const Modal=forwardRef( (props,ref) => {
    const [display, setDisplay]=React.useState(false); 
    const [flag, setFlag]=React.useState(true);
    
    useImperativeHandle(ref,()=>{
        return{
            openModal: () => open(),
            close: () => close()
        }
    })
    const open=()=>{
        setDisplay(true);
    }

    const close=()=>{
        setDisplay(false);
    };
    if(display){

        return (
            <div className="modalWrapper">
                <div onClick={close} className="modalBackdrop"/>
                <div className="modalBox">
                    <UserContext.Provider value={{flag, setFlag}}>
                        <ModalNav/>
                        <Auth/>
                    </UserContext.Provider>
                </div>
            </div>
        )

        
    }
    
    return null;
    
});
export default Modal
