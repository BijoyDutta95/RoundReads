import React from 'react'
import UserIcon from '../icons/user.svg';
import './SingleBlog.css'
import UpvoteIcon from '@material-ui/icons/ThumbUp';

function SingleBlog() {
    return (
        <div id="singleBlogReading">
            <h1>Blog Title</h1>
            <div id="blogPublisher">
                <img src={UserIcon} alt="blogger" id="bloggerIm"/>
                <div id="publisher">
                    <p>Publisher Name </p>
                    <p>Department Name </p>
                </div>
            </div>
            <p>Date Published</p>
            <div id="blogContent">
                <img src="/images/bookImg.jpg" alt="bookImage" id="blogCover"/>
                <p>Welcome to The Literary Edit! I’m Lucy, founder and editor of The Literary Edit, and a long standing bookworm with a passion for brilliant books, independent bookstores and literary festivals. Based between London and Sydney, The Literary Edit will bring you the best in all things bookish – from weekly book reviews, to beautiful bookstore features, to literary city guides and beyond.Welcome to The Literary Edit! I’m Lucy, founder and editor of The Literary Edit, and a long standing bookworm with a passion for brilliant books, independent bookstores and literary festivals. Based between London and Sydney, The Literary Edit will bring you the best in all things bookish – from weekly book reviews, to beautiful bookstore features, to literary city guides and beyond.Welcome to The Literary Edit! I’m Lucy, founder and editor of The Literary Edit, and a long standing bookworm with a passion for brilliant books, independent bookstores and literary festivals. Based between London and Sydney, The Literary Edit will bring you the best in all things bookish – from weekly book reviews, to beautiful bookstore features, to literary city guides and beyond.Welcome to The Literary Edit! I’m Lucy, founder and editor of The Literary Edit, and a long standing bookworm with a passion for brilliant books, independent bookstores and literary festivals. Based between London and Sydney, The Literary Edit will bring you the best in all things bookish – from weekly book reviews, to beautiful bookstore features, to literary city guides and beyond.Welcome to The Literary Edit! I’m Lucy, founder and editor of The Literary Edit, and a long standing bookworm with a passion for brilliant books, independent bookstores and literary festivals. Based between London and Sydney, The Literary Edit will bring you the best in all things bookish – from weekly book reviews, to beautiful bookstore features, to literary city guides and beyond.Welcome to The Literary Edit! I’m Lucy, founder and editor of The Literary Edit, and a long standing bookworm with a passion for brilliant books, independent bookstores and literary festivals. Based between London and Sydney, The Literary Edit will bring you the best in all things bookish – from weekly book reviews, to beautiful bookstore features, to literary city guides and beyond.Welcome to The Literary Edit! I’m Lucy, founder and editor of The Literary Edit, and a long standing bookworm with a passion for brilliant books, independent bookstores and literary festivals. Based between London and Sydney, The Literary Edit will bring you the best in all things bookish – from weekly book reviews, to beautiful bookstore features, to literary city guides and beyond.</p>
            </div>
            <div id="singleBlogButton">
                <div id="likeCount">
                    <UpvoteIcon id="upvoteIcon"/>
                    <p>30</p>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
