import React from 'react'
import './SimilarBooks.css'
import { API } from './API/Api'
import BookmarkIcon from '@material-ui/icons/Bookmark';
function SimilarBooks(props) {
    const [books, setBooks] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    
    React.useEffect(() =>{
        function getBooks(){
            setLoading(true)
            console.log('get similar')
            API.get('api/similar_books', {
                params:{
                    category : props.items.category
                }
            })
            .then(data=>{
                setBooks(data.data)
                console.log(data.data)
                setLoading(false)
            })
            .catch(err=>{
                console.log(err)
                setLoading(false)
            })
        }
        getBooks()
    }, [])
    
    const renderBooks = (card, index) =>{
        if(card.id == props.items.id){
            return null
        }
        return (
            
                <div id="cardBlock" key={index}>
            
            <div id="itemBlockLink" onClick={() =>{
                {/*setItemId(card.id)
                setItemClciked(true)
                addViews(card.id, card.views)
                */}
                }}>
                <img src={card.image1} alt="cardImage" className="cardImage"/>
                
            </div>
            <div id="cardItemInfo">
                <strong id="cardTitle">{card.title}</strong>
                <div id="itemPrcBlock">
                    {card.availability == 'both'?(
                        <>
                            <p id="salPrice"><b>Sale Price:</b> &#8377; {card.sale_price}</p>
                            <p id="borPrice"><b>Borrow Price:</b> &#8377; {card.borrow_price}</p>
                        </>
                    ):(
                        <>
                            {card.availability == 'sale'?(
                               <> 
                                <p id="salPrice"><b>Sale Price:</b> &#8377; {card.sale_price}</p> 
                                <p id="borPrice"><b>Borrow Price:</b> N/A </p>
                               </>
                            ):(
                                <>
                                    <p id="salPrice"><b>Sale Price:</b>N/A</p>
                                    <p id="borPrice"><b>Borrow Price:</b> &#8377; {card.borrow_price}</p>
                                </>
                            )}
                        </>
                    )}
                    
                </div>
                <div id="cardBlock_button">
                    {/*<button className="cardButtonSave">Save</button>*/}
                    {/*{userSession?(
                        <>
                        {JSON.stringify(wishList).includes(card.id)?(
                            <div id="saveButtonCard" onClick={() => validateUser(card.id, 0)}>
                                <p>Saved</p>
                                <BookmarkIcon id="bookmarkIcon"/>
                            </div>
                        ):( 
                            <div id="saveButtonCard" onClick={() => validateUser(card.id, 1)}>
                                <p>Save</p>
                                <BookmarkIcon id="bookmarkIcon"/>
                            </div>
                        )}
                        </>
                        ):(*/}
                        <div id="saveButtonCard" onClick={() => alert('Please Login')}>
                        <p>Save</p>
                        <BookmarkIcon id="bookmarkIcon"/>
                    </div>
                    {/*)}*/}
                    
                    
                    <button id="cardButtonContact" onClick={() =>{
                        {/*if(!userSession){
                            alert('Please Login')
                            return
                        }
                        setCurrentItem(card)
                        openPopUp()
                    */}
                    }}
                    >Contact Seller</button>
                    
                </div>  
            </div>  
        </div>
               
        )
    }
    
    if(loading){
        return(
            <div align='center'>
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }else
    if(books.length = 1){
        return(
        <div align='center'>
            <h3>Noooo Items Found</h3>
        </div>
        )
    }else

    return(
        <div id="similarBooksBlock">
                <h3>Similar Items</h3>
                <div id="similarCards" align='center'>
                    {books.map(renderBooks)}
            </div></div>
    )
}

export default SimilarBooks
