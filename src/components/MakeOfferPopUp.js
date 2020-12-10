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
                    <div id="requestFor">
                        <label>Request For</label>
                        <select name="requestFor" id="requestFor">
                            <option value="buying">Buying</option>
                            <option value="borrowing">Borrowing</option>
                        </select>
                    </div>
                    <div id="buyRequest">
                        <label>Buying Offer</label>
                        <input type="text" placeholder="Enter Offered Amount" required/>
                    </div>
                    <div id="borrowRequest">
                        <label>Borrowing Offer(Duration)</label>
                        <select name="Duration" id="borrowDuration">
                            <option value="1 month">1 Month</option>
                            <option value="2 months">2 Months</option>
                            <option value="3 months">3 Months</option>
                            <option value="4 months">4 Months</option>
                            <option value="5 months">5 Months</option>
                            <option value="6 months">6 Months</option>
                        </select>
                    </div>
                    <div id="message">
                        <textarea type="text" placeholder="Additional Message" required></textarea>
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