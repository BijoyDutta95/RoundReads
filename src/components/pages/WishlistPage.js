import React from 'react'
import AccountInfo from '../AccountInfo'
import WishlistItems from '../WishlistItems'
import './GlobalChange.css'
import { UserContext, WishListContext } from '../Context/Contexts'
import { Redirect } from 'react-router-dom'
import { API } from '../API/Api'


function WishlistPage() {
    const {wishList, userSession} = React.useContext(UserContext)
    const [items, setItems] = React.useState([])

    React.useEffect(() =>{
        function getWishList(wishList){
            console.log("getWishlist called")
            let url = "api/get_wishlist/"
            API.get(url, {
                params : {
                    wishlist : JSON.parse(wishList).reverse()
                }
            })
            .then(data =>{
                console.log(data.data)
                setItems((data.data))
            })
            .catch(err =>{
                console.log(err)
            })
        }
        getWishList(wishList)
    }, [wishList])

    if(!userSession){
        return <Redirect to="/"/>
    }

    return (
        <div className="globalBlock">           
            <AccountInfo/>
            <WishListContext.Provider value={{items, setItems}}>
                <WishlistItems/>
            </WishListContext.Provider>
        </div>
    )
}

export default WishlistPage