import React from 'react'
import BookIcon from '@material-ui/icons/Book'
import './Banner.css'
function Banner() {
    return (
        <div className="bannerBlock">
            <div className="bannerText">
                <p>New Arival</p>
                <p>Grab Soon</p>
            </div>
            <BookIcon className="bannerIcon"/>
        </div>
    )
}

export default Banner
