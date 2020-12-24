import React from 'react'
import './FilterBlock.css'
import SaleIcon from '@material-ui/icons/MonetizationOn';
import BorrowIcon from '@material-ui/icons/History'
import NewIcon from '../icons/5stars.svg';
import GentleIcon from '../icons/3stars.svg';
import HeavyIcon from '../icons/1star.svg';

import { FilterContext, SearchContext } from './Context/Contexts';

function FilterBlock() {

    const [saleIcon, setSaleIcon] = React.useState(false)
    const [borrowIcon, setBorrowIcon] = React.useState(false)
    const [asNewIcon, setAsNewIcon] = React.useState(false)
    const [lightUsedIcon, setLightUsedIcon] = React.useState(false)
    const [heavyUsedIcon, setHeavyUsedIcon] = React.useState(false)
    const [engineering, setEngineering] = React.useState(false)
    const [bussiness, setBussiness] = React.useState(false)
    const [management, setManagement] = React.useState(false)
    const [novel, setNovel] = React.useState(false)
    const [entertainment, setEntertainment] = React.useState(false)
    const [arts, setArts] = React.useState(false)
    const [math, setMath] = React.useState(false)
    const [physics, setPhysics] = React.useState(false)
    const [chemistry, setChemistry] = React.useState(false)
    const [life, setLife] = React.useState(false)

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
        if(engineering){
            category.push('engineering')
        }
        if(entertainment){
            category.push('entertainment')
        }
        if(arts){
            category.push('arts')
        }
        if(math){
            category.push('mathematics')
        }
        if(physics){
            category.push('physics')
        }
        if(chemistry){
            category.push('chemistry')
        }
        if(life){
            category.push('lifeScience')
        }
        if(bussiness){
            category.push('business')
        }
        if(management){
            category.push('management')
        }
        if(novel){
            category.push('novel')
        }
    }


    const filterItems = () =>{
        getAvailabilityArray()
        getConditionArray()
        getCategoryArray()
        if(availability.length === 0 && condition.length === 0 && category.length === 0){
            alert("Please select some Filters")
            return
        }
        setAvailability(availability)
        setCondition(condition)
        setCategory(category)
        if(searchTerm){
            getItems("http://localhost:8000/api/books/?search=" + searchTerm, availability, condition, category)
        }else{
            getItems("http://localhost:8000/api/books", availability, condition, category)
        }
        /*setAvailability([])
        setCondition([])
        setCategory([])*/  
    }

    const setCategoryEmpty = () =>{
        setEngineering(false); setEntertainment(false)
        setBussiness(false); setManagement(false)
        setNovel(false); setArts(false)
        setMath(false); setLife(false)
        setPhysics(false); setChemistry(false)
    }

    return (
        <div className="filterBlock">
            <div className="filterHeader">
                <strong>Filter</strong>
                <small id='clearAll' onClick={()=>{
                    setSaleIcon(false)
                    setBorrowIcon(false)
                    setAsNewIcon(false)
                    setLightUsedIcon(false)
                    setHeavyUsedIcon(false)
                    setCategoryEmpty()
                
                }}>Clear All</small>
            </div>
            <fieldset className="avField">
                <legend>By Availability</legend>
                <div className="avInner">
                    {saleIcon?(
                        <SaleIcon className="avIconsClicked" title="For Sale" onClick={() => setSaleIcon(false)}  />
                    ):(
                        <SaleIcon className="avIcons" title="For Sale" onClick={() => setSaleIcon(true)}  />
                    )}
                    {borrowIcon?(
                        <BorrowIcon className="avIconsClicked" onClick={() => setBorrowIcon(false)} title="For Borrow" />
                    ):(
                        <BorrowIcon className="avIcons" onClick={() => setBorrowIcon(true)} title="For Borrow"/>
                    )}
                </div>
            </fieldset>
            <fieldset className="conditionField">
                <legend>By Condition</legend>
                <div className="conInner">
                    {asNewIcon?(
                        <img src={NewIcon} alt="AsNew" className="conIconsClicked" onClick={() => setAsNewIcon(false)} title="Almost New"/>
                    ):(
                        <img src={NewIcon} alt="AsNew" className="conIcons" onClick={() => setAsNewIcon(true)} title="Almost New"/>
                    )}
                    {lightUsedIcon?(
                        <img src={GentleIcon} alt="AsNew" className="conIconsClicked" onClick={() => setLightUsedIcon(false)} title="Lightly Used"/>
                    ):(
                        <img src={GentleIcon} alt="AsNew" className="conIcons" onClick={() => setLightUsedIcon(true)} title="Lightly Used"/>
                    )}
                    {heavyUsedIcon?(
                        <img src={HeavyIcon} alt="AsNew" className="conIconsClicked" onClick={() => setHeavyUsedIcon(false)} title="Heavily Used"/>
                    ):(
                        <img src={HeavyIcon} alt="AsNew" className="conIcons" onClick={() => setHeavyUsedIcon(true)} title="Heavily Used"/>
                    )}
                    
                    
                </div>
            </fieldset>
            <fieldset className="categoryField">
                <legend>By Category</legend>
                <div className="catInner">
                    <div className="catList">
                        <input type="checkbox" checked={engineering} onChange={() => setEngineering(!engineering)}/>
                        <label for="Engineering"> Engineering</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="business" checked={bussiness} onChange={() => setBussiness(!bussiness)}/>
                        <label for="Business"> Business</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="management" checked={management} onChange={() => setManagement(!management)}/>
                        <label for="Management"> Management</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="novel" checked={novel} onChange={() => setNovel(!novel)}/>
                        <label for="Novel"> Novel</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="entertainment" checked={entertainment} onChange={() => setEntertainment(!entertainment)}/>
                        <label for="Entertainment"> Entertainment</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="arts" checked={arts} onChange={() => setArts(!arts)}/>
                        <label for="Arts"> Arts</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="mathematics" checked={math} onChange={() => setMath(!math)}/>
                        <label for="Mathematics"> Mathematics</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="physics" checked={physics} onChange={() => setPhysics(!physics)}/>
                        <label for="Physics"> Physics</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="chemistry" checked={chemistry} onChange={() => setChemistry(!chemistry)}/>
                        <label for="Chemistry"> Chemistry</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="lifeScience" checked={life} onChange={() => setLife(!life)}/>
                        <label for="Life Science"> Life Science</label>
                    </div>
                </div>
            </fieldset>
            <div align='center'>
                <button className="filterButton" onClick={filterItems}>Filter</button>
            </div>
        </div>
    )
}

export default FilterBlock