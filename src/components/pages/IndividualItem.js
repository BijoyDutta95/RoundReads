import React from 'react'
import ItemMoreInfo from '../ItemMoreInfo'
import ItemImageBlock from '../ItemImageBlock'
import { useParams } from 'react-router-dom'
import { API } from '../API/Api'
import SimilarBooks from '../SimilarBooks'
function IndividualItem() {
    let params = useParams()
    const [items, setItems] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [fetched, setFecthed] = React.useState(false)
    const [id, setId] = React.useState(params.id)
    
    React.useEffect(() =>{
        function getCurrentItem(){
            setLoading(true)
            console.log("getcurrent called")
            API.get("api/books/" + id)
            .then(data =>{
                console.log(data.data)
                setItems(data.data)
                setLoading(false)
                setFecthed(true)
            })
            .catch(err =>{
                console.log(err)
                setLoading(false)
            })
        }
        getCurrentItem()
    }, [id])

    if(loading){
        return(
            <div align='center'>
                        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div>
        )
    }else
    

    return (
        <div className="globalBlock">
            <h2>Item Information</h2>
            <ItemImageBlock items={items}/>
            <ItemMoreInfo items={items}/>
            {fetched?(
                <SimilarBooks items={items} setId={setId}/>
            ):(null)}
        </div>
    )
}

export default IndividualItem