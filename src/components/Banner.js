import React from 'react'
import BookIcon from '@material-ui/icons/Book'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import './Banner.css'
function Banner() {
    return (
        <div className="bannerBlock">
            <ArrowBackIcon id="forwardIcon"/>
            
            <div className="bannerText">
                <p>New Arival</p>
                <p>Grab Soon</p>
            </div>
            <BookIcon className="bannerIcon"/>
            <ArrowForwardIcon id="backwardIcon"/>
        </div>
    )
}

export default Banner
