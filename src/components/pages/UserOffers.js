import React from 'react'
import AccountInfo from '../AccountInfo'
import OfferItems from '../OfferItems'
import Deal from '../../icons/agreement.svg';
import { UserContext } from '../Context/Contexts';
import {API} from '../API/Api'
import { Redirect } from 'react-router-dom';

function UserOffers() {
    const {userSession} = React.useContext(UserContext)

    const [offers, setOffers] = React.useState([])
    const [fetched, setFetched] = React.useState(false)
    const [books, setBooks] = React.useState([])
    

    React.useEffect(() =>{
        function getMessages(){
            //console.log("get offers called :  " + url)
            API.get('api/requests/?search=' + JSON.parse(userSession).email)
            .then(data =>{
                console.log(data.data)
                setOffers(data.data)
                getItemsExtraInfo(JSON.stringify(data.data))
                //setFetched(true)
            })
            .catch(err =>{
                console.log(err)
            })
        }
        getMessages()
    }, [])
    
    function getItemsExtraInfo(offers){
        let offersTemp = JSON.parse(offers)
        let bookIdTemp = []
        for(let i in offersTemp){
            //console.log(offersTemp[i].book_id)
            bookIdTemp.push(offersTemp[i].book_id)
            
        }
        API.get('api/get_wishlist/', {
            params : {
                wishlist : bookIdTemp
            }
        })
        .then(data =>{
            console.log(data.data)
            setBooks(data.data)
            setFetched(true)
        })
        .catch(err =>{
            console.log(err)
        })
        
        
        
    }

    if(!userSession){
        return <Redirect to='/'/>
    }
    
    if(fetched){
        if(offers.length == 0){
            return (
                <div className="globalBlock">
                    <div id="noMessages">
                        <p>No Offers Made Yet!</p>
                        <p>Search for your favourite book and get the deal done</p>
                        <img src={Deal} alt="deal" id="dealImage"/>
                    </div>
                    <AccountInfo/>
                    {/*<OfferItems/>*/}
                </div>
            )
        }else{
            return(
                <div className="globalBlock">
                    <h2>Offers You Made</h2>      
                    <AccountInfo/>
                    <OfferItems offers={offers} books={books}/>
                </div>
            )
            
        }
    }else{
        return (
            <div className='globalBlock'>
                <AccountInfo/>
                <div align='center'>
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
        )
    }
    
}

export default UserOffers
