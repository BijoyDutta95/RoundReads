import React from 'react'
import './UserAdItems.css'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
function UserAdItems() {
    return (
        <div id="userItemsBlock">
            <img src="/images/bookImg.jpg" alt="itemImage" id="itemImage"/>
            <div id="itemInfo">
                <strong>Status: sold/unsold </strong>
                <strong>Views: 30 </strong>
                <strong>Price: 420</strong>
                
            </div>
            <div id="itemButton">
                <DeleteIcon id="deleteIcon"/>
                <EditIcon id="editIcon"/>
            </div>
        </div>
    )
}

export default UserAdItems
