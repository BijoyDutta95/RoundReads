import React from 'react'
import './PostForm.css'
import axios from 'axios'

class PostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title:"", author:"", desc:"", category:"engineering", condition:"asNew", 
            price:"", availability:"both",
            image1:"", image2:"", user:""
        }

        this.handleChanged = this.handleChanged.bind(this)
        this.handlePostAd = this.handlePostAd.bind(this)
        this.handleChangeImage1 = this.handleChangeImage1.bind(this);
        this.handleChangeImage2 = this.handleChangeImage2.bind(this);
    }

    componentDidMount(){
        this.setState({
            user : sessionStorage.getItem('user')
        })
    }

    handleChanged(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    _handleReaderLoaded1 = (readerEvt) =>{
    	let binaryString = readerEvt.target.result
    	
    	this.setState({
    		image1 : 'data:image/jpeg;base64,' + btoa(binaryString)
    	})
    }

    handleChangeImage1(event){
        let file = event.target.files[0]
    	
    	if(file){
    		const reader = new FileReader();
    		reader.onload = this._handleReaderLoaded1.bind(this)
    		reader.readAsBinaryString(file)
    	
    	}
    }

    _handleReaderLoaded2 = (readerEvt) =>{
    	let binaryString = readerEvt.target.result
    	
    	this.setState({
    		image2 : 'data:image/jpeg;base64,' + btoa(binaryString)
    	})
    }

    handleChangeImage2(event){
        let file = event.target.files[0]
    	
    	if(file){
    		const reader = new FileReader();
    		reader.onload = this._handleReaderLoaded2.bind(this)
    		reader.readAsBinaryString(file)
    	
    	}
    }

    handlePostAd(){
        
        let form_data = new FormData();
        //console.log("available : " + this.state.available_for)
        form_data.append('image1', this.state.image1);
        form_data.append('image2', this.state.image2);
        form_data.append('title', this.state.title);
        form_data.append('author', this.state.author);
        form_data.append('category', this.state.category);
        form_data.append('condition', this.state.condition);
        form_data.append('price', this.state.price);
        form_data.append('availability', this.state.availability);
        form_data.append('desc', this.state.desc);
        form_data.append('posted_by', JSON.parse(this.state.user).email);

        let url = "http://127.0.0.1:8000/api/books/"
       
        axios.post(url, form_data,    {
             headers: {
                    'content-type': 'multipart/form-data'
                }
            }
        )
            .then(data => {
                console.log("reaturned data : " + data)
                this.setState({
                    post_success : true
                })

            })
            .catch(e => {
                console.log("catched errorss : " + this.state.response)
            });

    }

    render(){
        if(this.state.post_success){
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
                                    <input type="text" placeholder="Enter Title" name="title" value={this.state.title} onChange={this.handleChanged} required></input>
                                </div>
                                <div className="inputField">
                                    <label for="author"><b>Author of the Book</b></label>
                                    <input type="text" placeholder="Enter Author Name" name="author" value={this.state.author} onChange={this.handleChanged} required></input>
                                </div>
                                <div className="inputField">
                                    <label for="description"><b>Description</b></label>
                                    <textarea type="text" placeholder="Enter Description" name="desc" value={this.state.desc} onChange={this.handleChanged} rows="5" cols="86" required></textarea>
                                </div>
                                <div className="inputField">
                                    <label for="category"><b>Choose a Category</b></label>
                                    <select name="category" id="category" onChange={this.handleChanged}>
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
                                    <select name="condition" id="condition" onChange={this.handleChanged}>
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
                                    <input type="text" placeholder="Enter Price" name="price" value={this.state.price} onChange={this.handleChanged} required></input>
                                </div>
                                <div id="availableOption">
                                    <label for="availability"><b>Choose Availability</b></label>
                                    <select name="availability" id="availability" onChange={this.handleChanged}>
                                        <option value="both">Both</option>
                                        <option value="sale">For Sale</option>
                                        <option value="borrow">For Borrow</option>
                                    </select>
                                </div>
                                <label for="image"><b>Upload Images</b></label>
                                <div id="fileUpload">
                                    <input type="file" onChange={this.handleChangeImage1}/>
                                    <input type="file" onChange={this.handleChangeImage2}/>
                                </div>
                            </form>
                    </fieldset>
                    <div id="buttonsDiv">
                        <button id="cancelButton"><b>Cancel</b></button>
                        <button type='submit' onClick={this.handlePostAd} id="submitButton"><b>Request Verification</b></button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default PostForm