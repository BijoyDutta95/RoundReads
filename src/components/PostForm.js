import React from 'react'
import './PostForm.css'
function PostForm() {
    return (
        <div id="formMainBlock">
            <h2>POST YOUR AD</h2>
            <div className="formField">
                <fieldset className="bookDetail">
                    <legend>Book Details</legend>
                        <form>
                            <div className="inputField">
                                <label for="title"><b>Title of the Book</b></label>
                                <input type="text" placeholder="Enter Title" name="title" required></input>
                            </div>
                            <div className="inputField">
                                <label for="author"><b>Author of the Book</b></label>
                                <input type="text" placeholder="Enter Author Name" name="author" required></input>
                            </div>
                            <div className="inputField">
                                <label for="description"><b>Description</b></label>
                                <textarea type="text" placeholder="Enter Description" name="description" rows="5" cols="86" required></textarea>
                            </div>
                            <div className="inputField">
                                <label for="category"><b>Choose a Category</b></label>
                                <select name="category" id="category">
                                    <option value="engineering">Engineering</option>
                                    <option value="business">Business</option>
                                    <option value="management">Management</option>
                                    <option value="novel">Novel</option>
                                    <option value="entertainment">Entertainment</option>
                                    <option value="arts">Arts</option>
                                    <option value="math">Mathematics</option>
                                    <option value="physics">Physics</option>
                                    <option value="chemistry">Chemistry</option>
                                    <option value="lifeScience">Life Science</option>
                                </select>
                            </div>
                            <div className="inputField">
                                <label for="bookCondition"><b>Select Book Condition</b></label>
                                <select name="condition" id="condition">
                                    <option value="asNew">Almost New</option>
                                    <option value="lightUsed">Lightly Used</option>
                                    <option value="heavyUsed">Heavily Used</option>
                                </select>
                            </div>
                        </form>
                </fieldset>
                
                <fieldset className="adDetail">
                    <legend>Ad Details</legend>
                        <form>
                            <div className="inputField">
                                <label for="price"><b>Price</b></label>
                                <input type="text" placeholder="Enter Price" name="title" required></input>
                            </div>
                            <div id="availableOption">
                                <label for="availability"><b>Choose Availability</b></label>
                                <select name="category" id="category">
                                    <option value="both">Both</option>
                                    <option value="sale">For Sale</option>
                                    <option value="borrow">For Borrow</option>
                                </select>
                            </div>
                            <label for="image"><b>Upload Images</b></label>
                            <div id="fileUpload">
                                <input type="file"/>
                                <input type="file"/>
                            </div>
                        </form>
                </fieldset>
                <div id="buttonsDiv">
                    <button id="cancelButton"><b>Cancel</b></button>
                    <button id="submitButton"><b>Request Verification</b></button>
                </div>
            </div>
        </div>
    )
}

export default PostForm
