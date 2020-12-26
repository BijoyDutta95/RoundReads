import React, {forwardRef,useImperativeHandle} from 'react';
import './DeclinePopUp.css'
import {API} from './API/Api'
import { MessageContext } from './Context/Contexts';

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
    const {messages, setMessages, declinedCount, setDeclinedCount, pendingCount, setPendingCount} = React.useContext(MessageContext)


    const sendMessage = () =>{
        //console.log(phone)
        console.log(message)
        let body = JSON.stringify({
            status : 'declined',
            response : message
        })

        API.patch('api/requests/' + props.currentMessage.id + '/', body, {
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(data =>{
            console.log(data.data)
            setLocalMessages()
            close()
            alert('Declination Sent')
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const setLocalMessages = () =>{
        let messagesTemp = []
        for(let i in messages){
            if(messages[i].id != props.currentMessage.id){
                messagesTemp.push(messages[i])
                /*messagesTemp.push(messages[i])
                messagesTemp[i].status = 'declined'*/
            }
        }
        setMessages(messagesTemp)
        setDeclinedCount(declinedCount+1)
        setPendingCount(pendingCount-1)
    }

    if(display){
        return (
            <div className="declineWrapper">
                <div onClick={close} className="declineBackdrop"/>
                <div className="declineBox">
                    <div id="reason">
                        <label>Reason for declining </label>
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
