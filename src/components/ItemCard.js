import React from 'react';
import './ItemCard.css'

function ItemCard() {
    var cardInfo=
    [
        {
            image: "/images/bookImg.jpg", title:"Just Book", condition:"As new"
        },
        {
            image: "/images/bookImg.jpg", title:"Just Book", condition:"As new"
        },
        {
            image: "/images/bookImg.jpg", title:"Just Book", condition:"As new"
        },
        {
            image: "/images/bookImg.jpg", title:"Just Book", condition:"As new"
        },
        {
            image: "/images/bookImg.jpg", title:"Just Book", condition:"As new"
        },
        {
            image: "/images/bookImg.jpg", title:"Just Book", condition:"As new"
        },
        {
            image: "/images/bookImg.jpg", title:"Just Book", condition:"As new"
        },
        {
            image: "/images/bookImg.jpg", title:"Just Book", condition:"As new"
        },
        {
            image: "/images/bookImg.jpg", title:"Just Book", condition:"As new"
        },
        {
            image: "/images/bookImg.jpg", title:"Just Book", condition:"As new"
        },
        {
            image: "/images/bookImg.jpg", title:"Just Book", condition:"As new"
        },
        {
            image: "/images/bookImg.jpg", title:"Just Book", condition:"As new"
        },
    ];

    const renderCard= (card, index) =>{
        return(
            <div id="cardBlock" key={index}>
                <img src={card.image} alt="cardImage" className="cardImage"/>
                <strong className="cardTitle">{card.title}</strong>
                <small className="cardCondition">{card.condition}</small>
                <button className="cardButton">Contact Seller</button>
            </div>
        )
    }
    return (
        <div id="cardMainBlock">
            {cardInfo.map(renderCard)}
        </div>
    )
}

export default ItemCard
