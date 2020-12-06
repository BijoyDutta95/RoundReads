import React from 'react'
import { UserContext } from '../Context/Contexts'
import { Redirect } from 'react-router-dom'

function WishlistTemp() {
    const {wishList} = React.useContext(UserContext)
    if(!wishList){
        return <Redirect to="/"/>
    }else
    return (
        <div align='center'>
            <h1>Wish List</h1>
            {wishList}<br/>
            {wishList[3]}
        </div>
    )
}

export default WishlistTemp