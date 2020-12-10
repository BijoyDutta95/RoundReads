import React from 'react'
import './UserAdItems.css'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { UserContext } from './Context/Contexts';
import { API } from './API/Api'
import ChatIcon from '@material-ui/icons/ChatBubble';
import ChatNotificationIcon from '@material-ui/icons/Announcement';
import { Link } from 'react-router-dom';


function UserAdItems() {
    const {userSession} = React.useContext(UserContext)
    const [items, setItems] = React.useState([])
    
    React.useEffect(() =>{
        function getUserItems(){
            let url = "api/get_user_books/?search=" + JSON.parse(userSession).email
            console.log("User items called")
            API.get(url)
            .then(data =>{
                console.log(data.data)
                setItems(data.data)
            })
            .catch(err =>{
                console.log(err)
            })
        }    
        getUserItems()
    }, [])

    const deleteItem = (id) =>{
        console.log("book to delete : " + id)
        let itemsTemp = []
        for(let i in items){
            if(items[i].id != id){
                itemsTemp.push(items[i])
            }
        }
        console.log("after delete : " + itemsTemp)
        setItems(itemsTemp)
        let url = "api/books/" + id
        API.delete(url)
        .then(data =>{
            console.log("success " + data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }
    
    
    const renderItem = (item, index) =>{
        return (
            
            <div id="userItemsBlock" key={index}>
                <img src={item.image1} alt="itemImage" id="itemImage"/>
                <div id="itemInfo">
                    <strong>Title: {item.title} </strong>
                    <strong>Views: {item.views} </strong>
                    {item.availability === 'both'?(
                        <>
                        <strong>Sale Price: {item.sale_price}</strong>
                        <strong>Borrow Price (Per Month): {item.borrow_price}</strong>
                        <strong>Sale Status: {item.is_sold} </strong>
                        <strong>Borrow Status: {item.is_borrowed} </strong>
                        </>
                    ):(null)}
                    {item.availability === 'sale'?(
                        <>
                        <strong>Sale Price: {item.sale_price}</strong>
                        <strong>Sale Status: {item.is_sold} </strong>
                        </>
                    ):(null)}
                    {item.availability === 'borrow'?(
                        <>
                        <strong>Borrow Price (Per Month): {item.borrow_price}</strong>
                        <strong>Borrow Status: {item.is_borrowed} </strong>
                       </>
                    ):(null)}      
                    
                </div>
                <div id="itemButton">
                    <DeleteIcon id="deleteIcon" onClick={() => deleteItem(item.id)}/>
                    <EditIcon id="editIcon"/>
                    <Link to='/messages' id="messages-link"><ChatIcon id="chatIcon"/></Link>
                </div>
            </div>
        )
    }

    return (   
        <div id="itemsDiplayedBlock">
            {items.map(renderItem)}
        </div>
    )
}

export default UserAdItems
