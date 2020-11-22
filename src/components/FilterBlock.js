import React from 'react'
import './FilterBlock.css'
import SaleIcon from '@material-ui/icons/MonetizationOn';
import BorrowIcon from '@material-ui/icons/History'
import NewIcon from '../icons/New.svg';
import GentleIcon from '../icons/gentleUse.svg';
import HeavyIcon from '../icons/heavyUse.svg';


function FilterBlock() {
    return (
        <div className="filterBlock">
            <div className="filterHeader">
                <strong>Filter</strong>
                <small>clear all</small>
            </div>
            {/*<div className="availableHeader">
                <p>By Availability</p>
                <div className="avIconsBlock">
                    <SaleIcon id="saleIcon"/>
                    <BorrowIcon id="borrowIcon"/>
                </div>
            </div>*/}
            <fieldset className="avField">
                <legend>By Availability</legend>
                <div className="avInner">
                    <SaleIcon className="avIcons"/>
                    <BorrowIcon className="avIcons"/>
                </div>
            </fieldset>
            <fieldset className="conditionField">
                <legend>By Condition</legend>
                <div className="conInner">
                    <img src={NewIcon} alt="AsNew" className="conIcons"/>
                    <img src={GentleIcon} alt="AsNew" className="conIcons"/>
                    <img src={HeavyIcon} alt="AsNew" className="conIcons"/>
                </div>
            </fieldset>
            <fieldset className="categoryField">
                <legend>By Category</legend>
                <div className="catInner">
                    <div className="catList">
                        <input type="checkbox" id="engineering" name="Engineering" value="Engineering"/>
                        <label for="Engineering"> Engineering</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="business" name="Business" value="Business"/>
                        <label for="Business"> Business</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="management" name="Management" value="Management"/>
                        <label for="Management"> Management</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="novel" name="Novel" value="Novel"/>
                        <label for="Novel"> Novel</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="entertainment" name="Entertainment" value="Entertainment"/>
                        <label for="Entertainment"> Entertainment</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="Arts" name="arts" value="Arts"/>
                        <label for="Arts"> Arts</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="Mathematics" name="mathematics" value="Mathematics"/>
                        <label for="Mathematics"> Mathematics</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="Physics" name="physics" value="Physics"/>
                        <label for="Physics"> Physics</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="Chemistry" name="chemistry" value="Chemistry"/>
                        <label for="Chemistry"> Chemistry</label>
                    </div>
                    <div className="catList">
                        <input type="checkbox" id="LifeScience" name="life science" value="Life Science"/>
                        <label for="Life Science"> Life Science</label>
                    </div>
                </div>
            </fieldset>
        </div>
    )
}

export default FilterBlock
