import React from 'react'
import AccountInfo from '../AccountInfo'
import WishlistItems from '../WishlistItems'
import './GlobalChange.css'
function WishlistPage() {
    return (
        <div className="globalBlock">
            <AccountInfo/>
            <WishlistItems/>
        </div>
    )
}

export default WishlistPage