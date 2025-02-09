import React, {forwardRef,useImperativeHandle} from 'react';
import './ReplyPopUp.css'
//import {UserContext} from './Context/Contexts'
import {API} from './API/Api'
import { MessageContext } from './Context/Contexts';

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

    const {messages, setMessages, acceptedCount, setAcceptedCount, pendingCount, setPendingCount} = React.useContext(MessageContext)

    const [phone, setPhone] = React.useState('')
    const [message, setMessage] = React.useState('')

    const sendMessage = () =>{
        console.log(phone)
        console.log(message)
        let body = JSON.stringify({
            seller_contact : phone,
            status : 'accepted',
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
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const setLocalMessages = () =>{
        let messagesTemp = []
        for(let i in messages){
            if(messages[i].id == props.currentMessage.id){
                messagesTemp.push(messages[i])
                messagesTemp[i].status = 'accepted'
            }else{
                messagesTemp.push(messages[i])
            }
        }
        setMessages(messagesTemp)
        setAcceptedCount(acceptedCount + 1)
        setPendingCount(pendingCount-1)
    }

    if(display){
        return (
            <div className="replyWrapper">
                <div onClick={close} className="replyBackdrop"/>
                <div className="replyBox">
                    <div id="senderDetail">
                        <div id="requestedFor">
                            <b><label>Requested For: </label></b>&nbsp;
                            <p>{props.currentMessage.request_for}</p>
                        </div>
                        {props.currentMessage.request_for == 'buying'?(
                            <div id="buyingRequest">
                                <b><label>Buying Offer:</label></b>&nbsp;
                                <p>&#8377; {props.currentMessage.buying_offer}</p>
                            </div>
                        ):(
                            <div id="borrowingRequest">
                                <b><label>Borrowing Offer(Duration):</label></b>&nbsp;
                                <p>{props.currentMessage.borrowing_offer} months</p>
                            </div>
                        )}
                        
                        
                    </div>
                    <hr id="hline"/>
                    <div id="senderBlock">
                        <b><label id="detailLabel">Share Contact Details</label></b>
                        <input type="text" id="contactDetail" required onChange={(e) => {setPhone(e.target.value)}}/>
                        <div id="message">
                            <textarea type="text" placeholder="Additional Message" onChange={(e) => {setMessage(e.target.value)}}></textarea>
                        </div>
                    </div>
                    <div id="replyPopButtons">
                        <button id="replyCancel" onClick={close}>Cancel</button>
                        <button id="replySend" onClick={sendMessage}>Send Message</button>
                    </div>
                </div>
            </div>
        )
    }
    return null;
    
});

export default ReplyPopUp
