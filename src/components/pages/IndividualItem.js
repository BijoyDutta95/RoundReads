import React from 'react'
import ItemMoreInfo from '../ItemMoreInfo'
import ItemImageBlock from '../ItemImageBlock'
import { useParams } from 'react-router-dom'
import { API } from '../API/Api'
function IndividualItem() {
    let params = useParams()
    const [items, setItems] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    
    React.useEffect(() =>{
        function getCurrentItem(){
            setLoading(true)
            console.log("getcurrent called")
            API.get("api/books/" + params.id)
            .then(data =>{
                console.log(data.data)
                setItems(data.data)
                setLoading(false)
            })
            .catch(err =>{
                console.log(err)
                setLoading(false)
            })
        }
        getCurrentItem()
    }, [])

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
        </div>
    )
}

export default IndividualItem
