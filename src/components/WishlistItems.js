import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import './WishlistItems.css'
import { WishListContext, UserContext } from './Context/Contexts';
import { API } from './API/Api'

function WishlistItems() {
    const {items, setItems} = React.useContext(WishListContext)
    const {wishList, setWishList, userSession} = React.useContext(UserContext)
    const removeFromWishList = (id) =>{
        console.log("books id to remove" + id)
        //console.log(items[0].id)
        let itemsTemp = []
        for(let i in items)
        {
            if(items[i].id != id){
                itemsTemp.push(items[i])
            }
        }
        setItems(itemsTemp)
        
        let wishListTemp = []
        for(let i in JSON.parse(wishList)){
            console.log(JSON.parse(wishList)[i])
            wishListTemp.push(JSON.parse(wishList)[i])
        }
        //wishListTemp.push(id)
        wishListTemp.splice(wishListTemp.indexOf(id), 1)
        console.log("after delete : " + wishListTemp)
        
        setWishList(JSON.stringify(wishListTemp))
        sessionStorage.setItem('wishlist', JSON.stringify(wishListTemp))
        //console.log("after : " + wishList)
        

        let url = "api/wishlist/" + JSON.parse(userSession).id + "/"
        let body = JSON.stringify({
            
            wishlist : wishListTemp
        })
        API.patch(url, body, {
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(data =>{
            console.log(JSON.stringify(data.data))
        })
        .catch(err=>{
            console.log(err)
        })
    
    }

    const renderItem = (item, index) =>{
        return (
            <div id="SingleItem" key={index}>
                <img src={item.image1} alt="itemImage" id="SingleItemImage"/>
                <div id="singleItemInfo">
                    <strong>Title : {item.title}</strong>
                    <small>Posted By : {item.posted_by}</small>
                    <small>Available For : {item.availability}</small>
                    {item.availability == 'both'?(
                        <>
                        <small>Buying Price : {item.sale_price}</small>
                        <small>Borrowing Price : {item.borrow_price}</small>
                        </>
                    ):(null)}
                    {item.availability == 'sale'?(
                        <>
                        <small>Buying Price : {item.sale_price}</small>
                        
                        </>
                    ):(null)}
                    {item.availability == 'borrow'?(
                        <>
                        <small>Borrowing Price : {item.borrow_price}</small>
                        </>
                    ):(null)}
                    
                </div>
                <div id="singleItemButtons">
                    <BookmarkIcon id="saveButton" onClick={() => removeFromWishList(item.id)}/>
                    <button>Contact Seller</button>
                </div>
            </div>
        )
    }

    return (   
        <div id="wishlistItemsBlock">
            {items.map(renderItem)}
        </div>
    )
}

export default WishlistItems
