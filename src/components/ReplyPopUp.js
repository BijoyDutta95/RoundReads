import React, {forwardRef,useImperativeHandle} from 'react';
import './ReplyPopUp.css'
const ReplyPopUp = forwardRef((props,ref) => {

    const [display, setDisplay]=React.useState(false);

    const open=()=>{
        setDisplay(true);
    }

    const close=()=>{
        setDisplay(false);
    };
    useImperativeHandle(ref,()=>{
        return{
            openModal: () => open(),
            close: () => close()
        }
    })

    if(display){
        return (
            <div className="replyWrapper">
                <div onClick={close} className="replyBackdrop"/>
                <div className="replyBox">
                    <div id="senderDetail">
                        <div id="requestedFor">
                            <b><label>Requested For: </label></b>&nbsp;
                            <p>Buying/Borrowing</p>
                        </div>
                        <div id="buyingRequest">
                            <b><label>Buying Offer:</label></b>&nbsp;
                            <p>&#8377; 500</p>
                        </div>
                        <div id="borrowingRequest">
                            <b><label>Borrowing Offer(Duration):</label></b>&nbsp;
                            <p>2 months</p>
                        </div>
                    </div>
                    <hr id="hline"/>
                    <div id="senderBlock">
                        <b><label id="detailLabel">Share Contact Details</label></b>
                        <input type="text" id="contactDetail" required/>
                        <div id="message">
                            <textarea type="text" placeholder="Additional Message"></textarea>
                        </div>
                    </div>
                    <div id="replyPopButtons">
                        <button id="replyCancel" onClick={close}>Cancel</button>
                        <button id="replySend">Send Message</button>
                    </div>
                </div>
            </div>
        )
    }
    return null;
    
});

export default ReplyPopUp
