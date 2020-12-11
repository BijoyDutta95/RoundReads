import React, {forwardRef,useImperativeHandle} from 'react';
import './DeclinePopUp.css'
import {API} from './API/Api'

const DeclinePopUp = forwardRef((props,ref) => {

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

    const [message, setMessage] = React.useState('Price too low')


    const sendMessage = () =>{
        //console.log(phone)
        console.log(message)
        let body = JSON.stringify({
            book_id : props.currentMessage.book_id,
            customer_email : props.currentMessage.requester_email,
            accepted : false,
            seller_contact : '1',
            message : message
        })

        API.post('api/responses/', body, {
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(data =>{
            console.log(data.data)
            close()
        })
        .catch(err =>{
            console.log(err)
        })
    }

    if(display){
        return (
            <div className="declineWrapper">
                <div onClick={close} className="declineBackdrop"/>
                <div className="declineBox">
                    <div id="reason">
                        <label>Reason for declining</label>
                        <select name="declinedFor" id="declinedFor" onChange={(e)=>{setMessage(e.target.value)}}>
                            <option value="Price too Low">Price too low</option>
                            <option value="Already Sold">Already Sold</option>
                            <option value="Duration too short">Duration too short</option>
                            <option value="Duration too long">Duration too long</option>
                        </select>
                    </div>
                    <div id="declinePopButtons">
                        <button id="declineCancel" onClick={close}>Cancel</button>
                        <button id="declineSend" onClick={sendMessage}>Decline</button>
                    </div>
                </div>
            </div>
        )
    }
    return null;
    
});

export default DeclinePopUp
