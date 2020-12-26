import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import './WishlistItems.css'
import { WishListContext, UserContext } from './Context/Contexts';
import { API } from './API/Api'
import { Redirect } from 'react-router-dom';
import MakeOfferPopUp from './MakeOfferPopUp';
import Santa from '../icons/santa.svg';

function WishlistItems() {
    const popRef=React.useRef();
    const openPopUp=()=>{
        popRef.current.openModal();
    }
    
    const {items, setItems} = React.useContext(WishListContext)
    const {wishList, setWishList, userSession} = React.useContext(UserContext)

    const [itemClicked, setItemClicked] = React.useState(false)
    const [currentItem, setCurrentItem] = React.useState('')

    const validateUser = (id, flag) =>{
        let body = JSON.stringify({
            token : localStorage.getItem('access_token')
        })
        API.post('auth/jwt/verify/', body, {
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then(data=>{
            console.log('success access : ' + JSON.stringify(data.data))
            if(flag == 1){
                //saveToWishList(id)
            }else{
                removeFromWishList(id)
            }
        })
        .catch(err=>{
            console.log('err access: ' + err)
            getAccess(id, flag)
    
        })
    }

    const getAccess = (id, flag) =>{
        let body = JSON.stringify({
            refresh : localStorage.getItem('refresh_token')
        })
        API.post('auth/jwt/refresh/', body, {
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then(data=>{
            console.log('success refresh : ' + (data.data.access))
            localStorage.setItem('access_token', data.data.access)
            if(flag == 1){
                //saveToWishList(id)
            }else{
                removeFromWishList(id)
            }
            
        })
        .catch(err=>{
            console.log('err refresh: ' + err)
            alert('Please Login to add items to Wishlist')
    
        })
    }
    

    const removeFromWishList = (id) =>{
        console.log("books id to remove" + id)
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
        

        let url = "auth/users/me/" 
        let body = JSON.stringify({
            wishlist : wishListTemp
        })
        API.patch(url, body, {
            headers : {
                'Authorization' : 'JWT ' + localStorage.getItem('access_token'),
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
            <div id="SingleItem" key={index} >
                <img src={item.image1} alt="itemImage" id="SingleItemImage"/>
                <div id="singleItemInfo">
                    <strong>Title : {item.title}</strong>
                    <small>Posted By : {item.poster_name}</small>
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
                    <BookmarkIcon id="saveButton" onClick={() => validateUser(item.id, 0)}/>
                    <button id='wishlistConSeller' onClick={()=>{
                        setCurrentItem(item.id)
                        setItemClicked(true)
                    }}>View Ad</button>
                    <button id="wishlistConSeller" onClick={()=>{
                        setCurrentItem(item)
                        openPopUp()
                    }}>Contact Seller</button>
                </div>
            </div>
        )
    }

    if(itemClicked){
        return(
            <Redirect to={'/currentItem/' + currentItem}/>
        )
    }

    if(items.length == 0){
        return(
        
            <div id="emptyWishlist">
                    <p>Empty Wishlist!</p>
                    <p>It seems lonely here! Hit that Save Button</p>
                    <img src={Santa} alt="mailbox" id="santaImage"/>
                </div>
        
        )
        
    }else

    return (   
        <div id="wishlistItemsBlock">
            {items.map(renderItem)}
            <MakeOfferPopUp ref={popRef} currentItem={currentItem}/>
        </div>
    )
}

export default WishlistItems
