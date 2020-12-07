import React from 'react'
import './UserAdItems.css'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { UserContext } from './Context/Contexts';
import Axios from 'axios';

function UserAdItems() {
    const {userSession} = React.useContext(UserContext)
    const [items, setItems] = React.useState([])
    
    React.useEffect(() =>{
        function getUserItems(){
            let url = "http://localhost:8000/api/get_user_books/?search=" + JSON.parse(userSession).email
            console.log("User items called")
            Axios.get(url)
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
        let url = "http://localhost:8000/api/books/" + id
        Axios.delete(url)
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
                    <strong>Title : {item.title} </strong>
                    <strong>Views: 30 </strong>
                    <strong>Price: {item.price}</strong>
                    
                </div>
                <div id="itemButton">
                    <DeleteIcon id="deleteIcon" onClick={() => deleteItem(item.id)}/>
                    <EditIcon id="editIcon"/>
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
