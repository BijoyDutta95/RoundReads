import React from 'react';
import './ItemCard.css'
import { DataContext, UserContext } from './Context/Contexts';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import { Redirect } from 'react-router-dom';
import { API } from './API/Api'
import MakeOfferPopUp from './MakeOfferPopUp';



function ItemCard() {
    const popRef=React.useRef();
    const openPopUp=()=>{
        popRef.current.openModal();
    }

    const {items} = React.useContext(DataContext)

    const {userSession, wishList, setWishList} = React.useContext(UserContext)

    const [itemClicked, setItemClciked] = React.useState(false)
    const [itemId, setItemId] = React.useState(null)
    const [currentItem, setCurrentItem] = React.useState([])

    

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
                saveToWishList(id)
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
                saveToWishList(id)
            }else{
                removeFromWishList(id)
            }
            
        })
        .catch(err=>{
            console.log('err refresh: ' + err)
            alert('Please Login to add items to Wishlist')
    
        })
    }
    
    

    const saveToWishList = (id) =>{
        console.log('prevv wishlist : ' + JSON.parse(wishList))
        if(JSON.parse(wishList).length == 10){
            alert("You can add maximum 10 items to Your WishList")
            return
        }
        console.log("books id to save" + id)
        let wishListTemp = []
        for(let i in (JSON.parse(wishList))){
            console.log(JSON.parse(wishList)[i])
            wishListTemp.push(JSON.parse(wishList)[i])
        }
        wishListTemp.push(id)
        console.log(wishListTemp)
       
        setWishList(JSON.stringify(wishListTemp))
        localStorage.setItem('wishlist', JSON.stringify(wishListTemp))
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

    const addViews = (id, views) =>{
        let body = JSON.stringify({
            views : views + 1
        })
        API.patch('api/books/' + id + '/', body, {
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then(data =>{
            console.log('views added : ' + data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    if(itemClicked && itemId){
        return <Redirect to={"currentItem/" + itemId}/>
    }


    
    const renderCard= (card, index) =>{
        return(
            <div id="cardBlock" key={index}>
            
                <div id="itemBlockLink" onClick={() =>{
                    setItemId(card.id)
                    setItemClciked(true)
                    addViews(card.id, card.views)
                    
                    }}>
                    <img src={card.image1} alt="cardImage" className="cardImage"/>
                    
                </div>
                <div id="cardItemInfo">
                    <strong id="cardTitle">{card.title}</strong>
                    <div id="itemPrcBlock">
                        {card.availability == 'both'?(
                            <>
                                <p id="salPrice"><b>Sale Price:</b> &#8377; {card.sale_price}</p>
                                <p id="borPrice"><b>Borrow Price:</b> &#8377; {card.borrow_price}</p>
                            </>
                        ):(
                            <>
                                {card.availability == 'sale'?(
                                   <> 
                                    <p id="salPrice"><b>Sale Price:</b> &#8377; {card.sale_price}</p> 
                                    <p id="borPrice"><b>Borrow Price:</b> N/A </p>
                                   </>
                                ):(
                                    <>
                                        <p id="salPrice"><b>Sale Price:</b>N/A</p>
                                        <p id="borPrice"><b>Borrow Price:</b> &#8377; {card.borrow_price}</p>
                                    </>
                                )}
                            </>
                        )}
                        
                    </div>
                    <div id="cardBlock_button">
                        {/*<button className="cardButtonSave">Save</button>*/}
                        {userSession?(
                            <>
                            {JSON.stringify(wishList).includes(card.id)?(
                                <div id="saveButtonCard" onClick={() => validateUser(card.id, 0)}>
                                    <p>Saved</p>
                                    <BookmarkIcon id="bookmarkIcon"/>
                                </div>
                            ):( 
                                <div id="saveButtonCard" onClick={() => validateUser(card.id, 1)}>
                                    <p>Save</p>
                                    <BookmarkIcon id="bookmarkIcon"/>
                                </div>
                            )}
                            </>
                        ):(
                            <div id="saveButtonCard" onClick={() => alert('Please Login')}>
                            <p>Save</p>
                            <BookmarkIcon id="bookmarkIcon"/>
                        </div>
                        )}
                        
                        
                        <button id="cardButtonContact" onClick={() =>{
                            if(!userSession){
                                alert('Please Login')
                                return
                            }
                            setCurrentItem(card)
                            openPopUp()

                        }}
                        >Contact Seller</button>
                        
                    </div>  
                </div>  
            </div>
        )
    }
    
   
    return (
    
        <div id="cardMainBlock">
            {items.map(renderCard)}
            <MakeOfferPopUp ref={popRef} currentItem={currentItem}/>
        </div>
        
        
    )

}

export default ItemCard
