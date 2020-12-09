import React, {forwardRef,useImperativeHandle} from 'react';
import './MakeOfferPopUp.css'

const MakeOfferPopUp = forwardRef((props,ref) =>{

    const [display, setDisplay]=React.useState(false);
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
            <div className="popWrapper">
                <div onClick={close} className="popBackdrop"/>
                <div className="popUpBox">
                    <div id="message">
                        <label for="description" id="messageLabel"><b>Message</b></label><br/><br/>
                        <textarea type="text" placeholder="Enter Your Message" required></textarea>
                    </div>
                    <div id="popButtons">
                        <button id="messageCancel" onClick={close}>Cancel</button>
                        <button id="messageSend">Send Message</button>
                    </div>
                </div>
            </div>
        )
    }
    return null;
    
});
export default MakeOfferPopUp