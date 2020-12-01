import React from 'react'
import Banner from '../Banner'
import FilterBlock from '../FilterBlock'
import ItemHeader from '../ItemHeader'
import ItemComponent from '../ItemComponent'
import axios from 'axios'
import { DataContext } from '../Context/DataContext'
import { FilterContext } from '../Context/FilterContext'

function HomePage() {
    let url = "http://localhost:8000/api/test/"

    const [items, setItems] = React.useState([])
    const [count, setCount] = React.useState(0)
    const [prev, setPrev] = React.useState('')
    const [next, setNext] = React.useState('')
    const [availability, setAvailability] = React.useState([])
    const [condition, setCondition] = React.useState([])
    const [category, setCategory] = React.useState([])

    React.useEffect(() => {
        getItems(url, availability, condition, category)
    }, [url])

    const getItems = (url, availability, condition, category) =>{
        console.log("get Items called")
        axios.get(url, {
            params : {
                'availability' : availability,
                'condition' : condition,
                'category' : category,
            }
        })
        .then(data =>{
            console.log("Returning data from getItems  " + data.data.count)
            setItems(data.data.results)
            setCount(data.data.count)
            setPrev(data.data.previous)
            setNext(data.data.next)
                  
    })
    .catch(err =>{
        console.log(err)
    })
    }

    return (
        <div>
            <Banner/>
            <FilterContext.Provider value={{setAvailability, setCondition, setCategory, getItems}}>
                <FilterBlock/>
            </FilterContext.Provider>
            <ItemHeader/>
            <DataContext.Provider value={{items, count, prev, next, getItems}}>
                <ItemComponent/>
            </DataContext.Provider>
        </div>
    )
}

export default HomePage
