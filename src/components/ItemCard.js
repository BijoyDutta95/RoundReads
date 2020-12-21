import React from 'react';
import './ItemCard.css'
import { DataContext, UserContext } from './Context/Contexts';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import { Redirect } from 'react-router-dom';
import { API } from './API/Api'

import MakeOfferPopUp from './MakeOfferPopUp';



function ItemCard() {
    const popRef=React.useRef();

    const {items} = React.useContext(DataContext)

    const {userSession, wishList, setWishList} = React.useContext(UserContext)

    const [itemClicked, setItemClciked] = React.useState(false)
    const [itemId, setItemId] = React.useState(null)
    const [currentItem, setCurrentItem] = React.useState([])

    const openPopUp=()=>{
        popRef.current.openModal();
    }


    const saveToWishList = (id) =>{
        if(JSON.parse(wishList).length == 3){
            alert("You can add maximum 10 items to Your WishList")
            return
        }
        console.log("books id to save" + id)
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

    if(itemClicked && itemId){
        return <Redirect to={"currentItem/" + itemId}/>
    }


    
    const renderCard= (card, index) =>{
        /*if(userSession){
            if(card.poster_email == JSON.parse(userSession).email){
                return
            }
        }*/
        
        return(
            <div id="cardBlock" key={index} href="/blog">
            
                <div id="itemBlockLink" onClick={() =>{
                    setItemId(card.id)
                    setItemClciked(true)
                    
                    }}>
                    <img src={card.image1} alt="cardImage" className="cardImage"/>
                    
                </div>
                <div id="cardItemInfo">
                    <strong id="cardTitle">{card.title}</strong>
                    <div id="itemPrcBlock">
                        {card.availability == 'both'?(
                            <>
                                <p id="salPrice"><b>Sale Price:</b> {card.sale_price}</p>
                                <p id="borPrice"><b>Borrow Price:</b> {card.borrow_price}</p>
                            </>
                        ):(
                            <>
                                {card.availability == 'sale'?(
                                   <p id="salPrice"><b>Sale Price:</b> {card.sale_price}</p> 
                                ):(
                                    <p id="borPrice"><b>Borrow Price:</b> {card.borrow_price}</p>
                                )}
                            </>
                        )}
                        
                    </div>
                    <div id="cardBlock_button">
                        {/*<button className="cardButtonSave">Save</button>*/}
                        {wishList?(
                            <>
                            {JSON.parse(wishList).includes(card.id)?(
                                <div id="saveButtonCard" onClick={() => removeFromWishList(card.id)}>
                                    <p>Saved</p>
                                    <BookmarkIcon id="bookmarkIcon"/>
                                </div>
                            ):( 
                                <div id="saveButtonCard" onClick={() => saveToWishList(card.id)}>
                                    <p>Save</p>
                                    <BookmarkIcon id="bookmarkIcon"/>
                                </div>
                            )}
                            </>
                        ):(
                            <div id="saveButtonCard">
                            <p>Save</p>
                            <BookmarkIcon id="bookmarkIcon"/>
                        </div>
                        )}
                        
                        
                        <button id="cardButtonContact" onClick={() =>{
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
