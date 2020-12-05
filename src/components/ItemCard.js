import React from 'react';
import './ItemCard.css'
import { DataContext, UserContext } from './Context/Contexts';
import Axios from 'axios';
import BookmarkIcon from '@material-ui/icons/Bookmark';


function ItemCard() {
    const {items} = React.useContext(DataContext)

    const {userSession, wishList, setWishList} = React.useContext(UserContext)
    const [saved, setSaved] = React.useState(false)
    

    const saveToWishlist = (id) =>{
        console.log("books id" + id)
        let wishListTemp = []
        for(let i in JSON.parse(wishList)){
            console.log(JSON.parse(wishList)[i])
            wishListTemp.push(JSON.parse(wishList)[i])
        }
        wishListTemp.push(id)
        console.log(wishListTemp)
       
        setWishList(JSON.stringify(wishListTemp))
        sessionStorage.setItem('wishlist', JSON.stringify(wishListTemp))
        //console.log("after : " + wishList)
        

        let url = "http://localhost:8000/api/wishlist/" + JSON.parse(userSession).id + "/"
        let body = JSON.stringify({
            
            wishlist : wishListTemp
        })
        Axios.patch(url, body, {
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(data =>{
            console.log(JSON.stringify(data.data))
            setSaved(true)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    const renderCard= (card, index) =>{
        return(
            <div id="cardBlock" key={index}>
                <img src={card.image1} alt="cardImage" className="cardImage"/>
                <strong className="cardTitle">{card.title}</strong>
                <small className="cardCondition">{card.condition}</small>
                <div id="cardBlock_button">
                    {/*<button className="cardButtonSave">Save</button>*/}
                    <div id="saveButton">
                        <p>Save</p>
                        <BookmarkIcon id="bookmarkIcon"/>
                    </div>
                    <button id="cardButtonContact">Contact Seller</button>
                </div>    
            </div>
        )
    }
    return (
       
            <div id="cardMainBlock">
            {items.map(renderCard)}
        </div>
       
        
    )
}

export default ItemCard
