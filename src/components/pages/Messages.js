import React from 'react'
import MessageCard from '../MessageCard'
import Mailbox from '../../icons/mailbox.svg';
import './GlobalChange.css'
import {API} from '../API/Api'
import { useParams } from 'react-router-dom';
function Messages() {
    
    const params = useParams()
    let url = 'api/requests/?search=' + params.id

    const [messages, setMessages] = React.useState([])
    const [fetched, setFetched] = React.useState(false)

    React.useEffect(() =>{
        function getMessages(){
            API.get(url)
            .then(data =>{
                console.log(data.data)
                setMessages(data.data)
                setFetched(true)
            })
            .catch(err =>{
                console.log(err)
            })
        }
        getMessages()
    }, [url])
    if(fetched){
        if(messages.length == 0){
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
                <MessageCard messages={messages}/>
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
