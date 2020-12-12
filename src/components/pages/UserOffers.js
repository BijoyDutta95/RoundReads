import React from 'react'
import AccountInfo from '../AccountInfo'
import OfferItems from '../OfferItems'
import Deal from '../../icons/agreement.svg';

function UserOffers() {
    return (
        <div className="globalBlock">
            <div id="noMessages">
                <p>No Offers Made Yet!</p>
                <p>Search for your favourite book and get the deal done</p>
                <img src={Deal} alt="deal" id="dealImage"/>
            </div>
            <AccountInfo/>
            <OfferItems/>
        </div>
    )
}

export default UserOffers
