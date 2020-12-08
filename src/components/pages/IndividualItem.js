import React from 'react'
import ItemMoreInfo from '../ItemMoreInfo'
import ItemImageBlock from '../ItemImageBlock'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
function IndividualItem() {
    let params = useParams()
    const [items, setItems] = React.useState([])
    
    React.useEffect(() =>{
        function getCurrentItem(){
            console.log("getcurrent called")
            Axios.get("http://localhost:8000/api/books/" + params.id)
            .then(data =>{
                console.log(data.data)
                setItems(data.data)
            })
            .catch(err =>{
                console.log(err)
            })
        }
        getCurrentItem()
    }, [])

    

    return (
        <div className="globalBlock">
            <ItemImageBlock items={items}/>
            <ItemMoreInfo items={items}/>
        </div>
    )
}

export default IndividualItem
