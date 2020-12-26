import React, {forwardRef,useImperativeHandle} from 'react';
import './MakeOfferPopUp.css'
import { UserContext } from './Context/Contexts';
import { API } from './API/Api';
import Success from './Success';
import Alert from '@material-ui/lab/Alert';

const MakeOfferPopUp = forwardRef((props,ref) =>{
    const {userSession} = React.useContext(UserContext)

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
        setRequestFor('buying')
    };
    
    const [requestFor, setRequestFor] = React.useState('buying')
    const [buyingOffer, setBuyingOffer] = React.useState()
    const [borrowingOffer, setBorrowingOffer] = React.useState(1)
    const [message, setMessage] = React.useState('')
    const [messageSent, setMessageSent] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)

    const sendRequest = () =>{
        setLoading(true)
        setError(false)

        let requestForTemp = requestFor
        if(props.currentItem.availability == 'borrow'){
            requestForTemp = 'borrowing'
        }
        console.log(props.currentItem.id)
        console.log(requestFor)
        console.log(buyingOffer)
        console.log(borrowingOffer)
        console.log(message)
        //console.log(JSON.parse(userSession).name)
        let body = JSON.stringify({
            book_id : props.currentItem.id,
            request_for : requestForTemp,
            buying_offer : buyingOffer,
            borrowing_offer : borrowingOffer,
            message : message,
            requester_name : JSON.parse(userSession).fname + " " + JSON.parse(userSession).mname + " " + JSON.parse(userSession).lname,
            requester_email : JSON.parse(userSession).email

        })
        API.post('api/requests/', body, {
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(data =>{
            console.log(data.data)
            //setMessageSent(true)
            setLoading(false)
            setDisplay(false)
            alert('Message Sent Successfully')
        })
        .catch(err =>{
            console.log(err)
            setError(true)
            setLoading(false)
            alert('Something Error Occured')
            
        })
    }

    if(display){
        return (
            <div className="popWrapper">
                <div onClick={close} className="popBackdrop"/>
                <div className="popUpBox">
                    <strong>Title : {props.currentItem.title}</strong><br/>
                    <strong>Available For : {props.currentItem.availability}</strong><br/>
                    <strong>Selling Price : {props.currentItem.sale_price}</strong><br/>
                    <strong>Borrowing Price : {props.currentItem.borrow_price}</strong><br/>
                    <br/>
                    
                    {props.currentItem.availability == 'both' ?(
                        <>
                        <div id="requestFor">
                            <label>Request For</label>
                            <select name="requestFor" id="requestFor" onChange={(e) => setRequestFor(e.target.value)}>
                                <option value="buying">Buying</option>
                                <option value="borrowing">Borrowing</option>
                            </select>
                        </div>
                        {requestFor == 'buying'?(
                            <div id="buyRequest">
                                <label>Buying Offer</label>
                                <input type="text" placeholder="Enter Offered Amount" required onChange={(e) =>{setBuyingOffer(e.target.value)}}/>
                            </div>
                        ):(
                            <div id="borrowRequest">
                                <label>Borrowing Offer(Duration)</label>
                                <select name="Duration" id="borrowDuration" onChange={(e) =>{setBorrowingOffer(e.target.value)}}>
                                    <option value="1">1 Month</option>
                                    <option value="2">2 Months</option>
                                    <option value="3">3 Months</option>
                                    <option value="4">4 Months</option>
                                    <option value="5">5 Months</option>
                                    <option value="6">6 Months</option>
                                </select>
                            </div>
                        )}
                        </>
                    ):(null)}

                    {props.currentItem.availability == 'sale' ?(
                        <>
                            <div id="requestFor">
                                <label>Request For</label>
                                <select name="requestFor" id="requestFor" onChange={(e) => setRequestFor(e.target.value)}>
                                    <option value="buying">Buying</option>
                                </select>
                            </div>
                            <div id="buyRequest">
                                <label>Buying Offer</label>
                                <input type="text" placeholder="Enter Offered Amount" required onChange={(e) =>{setBuyingOffer(e.target.value)}}/>
                            </div>

                        </>
                    ):(null)}

                    {props.currentItem.availability == 'borrow' ?(
                        <>
                        <div id="requestFor">
                            <label>Request For</label>
                            <select name="requestFor" id="requestFor" onChange={(e) => setRequestFor(e.target.value)}>
                                <option value="borrowing">Borrowing</option>
                            </select>
                        </div>
                        <div id="borrowRequest">
                            <label>Borrowing Offer(Duration)</label>
                            <select name="Duration" id="borrowDuration" onChange={(e) =>{setBorrowingOffer(e.target.value)}}>
                                <option value="1">1 Month</option>
                                <option value="2">2 Months</option>
                                <option value="3">3 Months</option>
                                <option value="4">4 Months</option>
                                <option value="5">5 Months</option>
                                <option value="6">6 Months</option>
                            </select>
                        </div>
                        </>
                    ):(null)}
                    
                    
                    <div id="message">
                        <textarea type="text" placeholder="Additional Message" required onChange={(e) =>{setMessage(e.target.value)}}></textarea>
                    </div>
                    {/*{error?(
                        <div id='loginError' align='center'>
                            <p>Something Error Occured</p>
                        </div>
                    ):(null)}*/}
                    <div id="popButtons">
                        <button id="messageCancel" onClick={close}>Cancel</button>
                        <button id="messageSend" onClick={sendRequest}>Send Message </button>
                    </div>
                    {loading?(
                        <div align='center'>
                            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                        </div>
                    ):(null)}
                </div>
            </div>
        )
    }
    return null;
    
});
export default MakeOfferPopUp