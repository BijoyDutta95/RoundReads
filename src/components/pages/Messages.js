import React from 'react'
import MessageCardPending from '../MessageCardPending'
import MessageCardAccepted from '../MessageCardAccepted'
import MessageCardDeclined from '../MessageCardDeclined'
import Mailbox from '../../icons/mailbox.svg';
import './GlobalChange.css'
import {API} from '../API/Api'
import { useParams } from 'react-router-dom';
import { MessageContext } from '../Context/Contexts';
import AccountInfo from '../AccountInfo';
import MessagesInfo from '../MessagesInfo';
function Messages() {
    
    const params = useParams()
    let url = 'api/requests/?search=' + params.id

    const [messages, setMessages] = React.useState([])
    const [fetched, setFetched] = React.useState(false)
    const [messageCount, setMessageCount] = React.useState(0)
    
    const [acceptedClicked, setAcceptedClicked] = React.useState(false)
    const [pendingClicked, setPendingClicked] = React.useState(true)
    const [declinedClicked, setDeclinedClicked] = React.useState(false)

    const [acceptedCount, setAcceptedCount] = React.useState(0)
    const [pendingCount, setPendingCount] = React.useState(0)
    const [declinedCount, setDeclinedCount] = React.useState(0)

    React.useEffect(() =>{
        function getMessages(){
            API.get(url)
            .then(data =>{
                console.log(data.data)
                setCount(JSON.stringify(data.data))
                setMessages(data.data)
                setFetched(true)
            })
            .catch(err =>{
                console.log(err)
            })
        }
        getMessages()
    }, [url])

    const setCount = (temp) =>{
        let data = JSON.parse(temp)
        let accepted = 0
        let declined = 0
        let pending = 0
        for(let i in data){
            if(data[i].status == 'declined'){
                declined++
            }
            if(data[i].status == 'accepted'){
                accepted++
            }
            if(data[i].status == 'pending'){
                pending++
            }
        }
        setDeclinedCount(declined)
        setAcceptedCount(accepted)
        setPendingCount(pending)
    }
    
    if(fetched){
        if( (acceptedCount+pendingCount+declinedCount) == 0 ){
            return(
                <div id="noMessages">
                    <p>Empty Mail Box!</p>
                    <p>It seems lonely here! Try Posting a new Ad</p>
                    <img src={Mailbox} alt="mailbox" id="mailImage"/>
                </div>
            )
        }else
        return (
            <div className="globalBlock">
                <MessageContext.Provider value={{messages, setMessages, setMessageCount, 
                            setPendingClicked, setAcceptedClicked, setDeclinedClicked,
                            acceptedCount, declinedCount, pendingCount,
                            setAcceptedCount, setDeclinedCount, setPendingCount}}>
                    
                    <MessagesInfo align='center'/>
                    {pendingClicked?(
                        <MessageCardPending/>
                    ):(null)}
                    {acceptedClicked?(
                        <MessageCardAccepted/>
                    ):(null)}
                    {declinedClicked?(
                        <MessageCardDeclined/>
                    ):(null)}
                    
                </MessageContext.Provider>
                
            </div>
        )
    }else{
        return(
            <div align='center'>
                <h1>Loading Messages</h1>
            </div>
        )
    }
    
}
export default Messages
