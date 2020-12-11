import React from 'react'
import { API } from '../API/Api'
import SearchDropDown from '../SearchDropDown'

export default function SearchSuggest(){
    const [books, setBooks] = React.useState([])
    const [suggessions, setSugessions] = React.useState([])
    
    React.useEffect(() =>{
        function getItems(){
            console.log('getBoooksss')
            API.get('api/get_user_books')
            .then(data=>{
                setBooks(data.data)
                console.log(data.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        getItems()
    }, [])

    const search = (term) =>{
        console.log(term)
        let suggessionsTemp = []
        if(term.length >= 3){
            console.log("search")
            for(let i in books){
                if(books[i].author.toLowerCase().includes(term.toLowerCase())){
                    if(!suggessionsTemp.includes(books[i].author)){
                        suggessionsTemp.push(books[i].author)
                    }
                    
                }
                if(books[i].category.toLowerCase().includes(term.toLowerCase())){
                    //console.log(books[i].category)
                    if(!suggessionsTemp.includes(books[i].category)){
                        suggessionsTemp.push(books[i].category)
                    }
                }
                if(books[i].title.toLowerCase().includes(term.toLowerCase())){
                    //console.log(books[i].title)
                    if(!suggessionsTemp.includes(books[i].title)){
                        suggessionsTemp.push(books[i].title)
                    }
                }
                /*if(books[i].desc.toLowerCase().includes(term.toLowerCase())){
                    //console.log(books[i].desc)
                    suggessionsTemp.push(books[i].desc)
                }*/
            }
            setSugessions(suggessionsTemp)
            console.log(suggessionsTemp)

        }

    }

    return(
        <div align="center">
            <input type="text" onChange={async (e) =>{
                setSugessions([])
                search(e.target.value)
                
            }}/>
            <SearchDropDown suggessions={suggessions}/>
        </div>
    )
    
}