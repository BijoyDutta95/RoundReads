import React from 'react'
import './PostForm.css'
import axios from 'axios'
import { UserContext } from './Context/Contexts'
import { Redirect } from 'react-router-dom'


function PostForm() {
    const [title, setTitle] = React.useState('')
    const [author, setAuthor] = React.useState('')
    const [desc, setDesc] = React.useState('')
    const [category, setCategory] = React.useState('engineering')
    const [condition, setCondition] = React.useState('asNew')
    const [salePrice, setSalePrice] = React.useState(null)
    const [borrowPrice, setBorrowPrice] = React.useState(null)
    const [availability, setAvailability] = React.useState('both')
    const [image1, setImage1] = React.useState('')
    const [image2, setImage2] = React.useState('')
    const [postSuccess, setPostSuccess] = React.useState(false)
    
    const {userSession} = React.useContext(UserContext)

    const handleChangeImage1 = (event) =>{
        let file = event.target.files[0]
    	
    	if(file){
    		const reader = new FileReader();
    		reader.onload = function(readerEvt){
                let binaryString = readerEvt.target.result
                setImage1('data:image/jpeg;base64,' + btoa(binaryString))
            }
    		reader.readAsBinaryString(file)
    	
        }
        console.log(image1)
    }

    const handleChangeImage2 = (event) =>{
        let file = event.target.files[0]
    	
    	if(file){
    		const reader = new FileReader();
    		reader.onload = function(readerEvt){
                let binaryString = readerEvt.target.result
                setImage2('data:image/jpeg;base64,' + btoa(binaryString))
            }
    		reader.readAsBinaryString(file)
    	
        }
    }

    
    const handlePostAd = () =>{

        let form_data = new FormData();
        form_data.append('image1', image1);
        form_data.append('image2', image2);
        form_data.append('title', title);
        form_data.append('author', author);
        form_data.append('category', category);
        form_data.append('condition', condition);
        if(salePrice){
            form_data.append('sale_price', salePrice);
        }else{
            form_data.append('sale_price', 0);
        }
        if(borrowPrice){
            form_data.append('borrow_price', borrowPrice);
        }else{
            form_data.append('borrow_price', 0);
        }
        form_data.append('availability', availability);
        form_data.append('desc', desc);
        form_data.append('poster_email', JSON.parse(userSession).email);
        form_data.append('poster_name', JSON.parse(userSession).fname + " " + JSON.parse(userSession).mname + " " + JSON.parse(userSession).lname);
        form_data.append('is_borrowed', "No");
        form_data.append('is_sold', "No");
        form_data.append('is_verified', false);
        form_data.append('views', 0);
        
       
        

        let url = "http://127.0.0.1:8000/api/books/"
       
        axios.post(url, form_data, {
             headers: {
                    'content-type': 'multipart/form-data'
                }
            }
        )
            .then(data => {
                console.log("reaturned data : " + data)
                setPostSuccess(true)
            })
            .catch(e => {
                console.log("catched errorss : " + e)
            });

    }

    if(!userSession){
        return <Redirect to="/"/>
    }

    if(postSuccess){
        return(
            <div id="formMainBlock">
                <h2>You have successfully Posted Your Ad</h2>
            </div>
        )
    }
    else
    return (
        <div id="formMainBlock">
            <h2>POST YOUR AD</h2>
            <div className="formField">
                <fieldset className="bookDetail">
                    <legend>Book Details</legend>
                        <form>
                            <div className="inputField">
                                <label for="title"><b>Title of the Book</b></label>
                                <input type="text" placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} required></input>
                            </div>
                            <div className="inputField">
                                <label for="author"><b>Author of the Book</b></label>
                                <input type="text" placeholder="Enter Author Name" onChange={(e) => setAuthor(e.target.value)} required></input>
                            </div>
                            <div className="inputField">
                                <label for="description"><b>Description</b></label><br/><br/>
                                <textarea type="text" placeholder="Enter Description" onChange={(e) => setDesc(e.target.value)} rows="5" cols="86" required></textarea>
                            </div>
                            <div className="inputField">
                                <label for="category"><b>Choose a Category</b></label>
                                <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
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
                                <select name="condition" id="condition" onChange={(e) => setCondition(e.target.value)}>
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
                            
                            <div id="availableOption">
                                <label for="availability"><b>Choose Availability</b></label>
                                <select name="availability" id="availability" onChange={(e) => setAvailability(e.target.value)}>
                                    <option value="both">Both</option>
                                    <option value="sale">For Sale</option>
                                    <option value="borrow">For Borrow</option>
                                </select>
                            </div>
                            {availability == "both"?(
                                <>
                                <div className="inputField">
                                    <label className="onAvailable" for="saleprice"><b>Sale Price</b></label>
                                    <input className="onAvailable" type="text" placeholder="Enter Price" onChange={(e) => setSalePrice(e.target.value)} required></input>
                                </div>
                                <div className="inputField">
                                    <label className="onAvailable" for="borrowPrice"><b>Borrow Price (Per Month)</b></label>
                                    <input className="onAvailable" type="text" placeholder="Enter Price" onChange={(e) => setBorrowPrice(e.target.value)} required></input>
                                </div></>
                            ):(null)}
                            
                            {availability == "sale"?(
                                <div className="inputField">
                                    <label className="onAvailable" for="saleprice"><b>Sale Price</b></label>
                                    <input className="onAvailable" type="text" placeholder="Enter Price" onChange={(e) => setSalePrice(e.target.value)} required></input>
                                </div>
                            ):(null)}
                            {availability == "borrow"?(
                                <div className="inputField">
                                    <label className="onAvailable" for="borrowPrice"><b>Borrow Price (Per Month)</b></label>
                                    <input className="onAvailable" type="text" placeholder="Enter Price" onChange={(e) => setBorrowPrice(e.target.value)} required></input>
                                </div>
                            ):(null)}
                                
                            
                            
                            <label for="image"><b>Upload Images</b></label>
                            <div id="fileUpload">
                                <input type="file" onChange={handleChangeImage1}/>
                                <input type="file" onChange={handleChangeImage2}/>
                            </div>
                        </form>
                </fieldset>
                <div id="buttonsDiv">
                    <button id="cancelButton"><b>Cancel</b></button>
                    <button type='submit' onClick={handlePostAd} id="submitButton"><b>Request Verification</b></button>
                </div>
                
            </div>
        </div>
    )
}

export default PostForm