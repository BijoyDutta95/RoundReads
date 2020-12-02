import React from 'react'
import './FilterBlock.css'
import SaleIcon from '@material-ui/icons/MonetizationOn';
import BorrowIcon from '@material-ui/icons/History'
import NewIcon from '../icons/New.svg';
import GentleIcon from '../icons/gentleUse.svg';
import HeavyIcon from '../icons/heavyUse.svg';

import { FilterContext } from './Context/FilterContext';
import { SearchContext } from './Context/DataContext';

function FilterBlock(props) {

    const [saleIcon, setSaleIcon] = React.useState(false)
    const [borrowIcon, setBorrowIcon] = React.useState(false)
    const [asNewIcon, setAsNewIcon] = React.useState(false)
    const [lightUsedIcon, setLightUsedIcon] = React.useState(false)
    const [heavyUsedIcon, setHeavyUsedIcon] = React.useState(false)

    //const {searchTerm, searchFlag} = React.useContext(FilterContext)
    const {setAvailability, setCondition, setCategory, getItems} = React.useContext(FilterContext)
    const {searchTerm} = React.useContext(SearchContext)

    let availability = []
    let condition = []
    let category = []
    
    const getAvailabilityArray = () =>{
        if(saleIcon){
            availability.push('sale')
        }
        if(borrowIcon){
            availability.push('borrow')
        }
        if(saleIcon && borrowIcon){
            availability.push('both')
        }
    }

    const getConditionArray = () =>{
        if(asNewIcon){
            condition.push('asNew')
        }
        if(lightUsedIcon){
            condition.push('lightUsed')
        }
        if(heavyUsedIcon){
            condition.push('heavyUsed')
        }
    }

    const getCategoryArray = (e) =>{
        if(category.includes(e.target.name)){
            console.log('exist  ' + e.target.name)
            category.splice(category.indexOf(e.target.name), 1)
        }else{
            console.log('pushed')
            category.push(e.target.name)
        }
    }

    const filterItems = () =>{
        getAvailabilityArray()
        getConditionArray()
        if(availability.length === 0 && condition.length === 0 && category.length === 0){
            alert("Please select some Filters")
            return
        }
        setAvailability(availability)
        setCondition(condition)
        setCategory(category)
        if(searchTerm){
            getItems("http://localhost:8000/api/test/?search=" + searchTerm, availability, condition, category)
        }else{
            getItems("http://localhost:8000/api/test", availability, condition, category)
        }
        setAvailability([])
        setCondition([])
        setCategory([])  
    }

    

    return (
        <div className="filterBlock">
            <div className="filterHeader">
                <strong>Filter</strong>
                <small>clear all</small>
            </div>
            <fieldset className="avField">
                <legend>By Availability</legend>
                <div className="avInner">
                    {saleIcon?(
                        <SaleIcon className="avIconsClicked" onClick={() => setSaleIcon(false)} />
                    ):(
                        <SaleIcon className="avIcons" onClick={() => setSaleIcon(true)} />
                    )}
                    {borrowIcon?(
                        <BorrowIcon className="avIconsClicked" onClick={() => setBorrowIcon(false)} />
                    ):(
                        <BorrowIcon className="avIcons" onClick={() => setBorrowIcon(true)} />
                    )}
                </div>
            </fieldset>
            <fieldset className="conditionField">
                <legend>By Condition</legend>
                <div className="conInner">
                    {asNewIcon?(
                        <img src={NewIcon} alt="AsNew" className="conIconsClicked" onClick={() => setAsNewIcon(false)}/>
                    ):(
                        <img src={NewIcon} alt="AsNew" className="conIcons" onClick={() => setAsNewIcon(true)}/>
                    )}
                    {lightUsedIcon?(
                        <img src={GentleIcon} alt="AsNew" className="conIconsClicked" onClick={() => setLightUsedIcon(false)}/>
                    ):(
                        <img src={GentleIcon} alt="AsNew" className="conIcons" onClick={() => setLightUsedIcon(true)}/>
                    )}
                    {heavyUsedIcon?(
                        <img src={HeavyIcon} alt="AsNew" className="conIconsClicked" onClick={() => setHeavyUsedIcon(false)}/>
                    ):(
                        <img src={HeavyIcon} alt="AsNew" className="conIcons" onClick={() => setHeavyUsedIcon(true)}/>
                    )}
                    
                    
                </div>
            </fieldset>
            <fieldset className="categoryField">
                <legend>By Category</legend>
                <div className="catInner">
                    <div className="catList">
                        <input type="checkbox" name="engineering"onChange={getCategoryArray}/>
                        <label for="Engineering"> Engineering</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" name="business" onChange={getCategoryArray}/>
                        <label for="Business"> Business</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" name="management" onChange={getCategoryArray}/>
                        <label for="Management"> Management</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" name="novel" onChange={getCategoryArray}/>
                        <label for="Novel"> Novel</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" name="entertainment" onChange={getCategoryArray}/>
                        <label for="Entertainment"> Entertainment</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" name="arts" onChange={getCategoryArray}/>
                        <label for="Arts"> Arts</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" name="mathematics" onChange={getCategoryArray}/>
                        <label for="Mathematics"> Mathematics</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" name="physics" onChange={getCategoryArray}/>
                        <label for="Physics"> Physics</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" name="chemistry" onChange={getCategoryArray}/>
                        <label for="Chemistry"> Chemistry</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" name="lifeScience" onChange={getCategoryArray}/>
                        <label for="Life Science"> Life Science</label>
                    </div>
                </div>
            </fieldset>
            <div align='center'>
                <button className="button" onClick={filterItems}>Filter</button>
            </div>
        </div>
    )
}

export default FilterBlock