import React, { Component } from 'react'
import Banner from '../Banner'
import FilterBlock from '../FilterBlock'
import ItemHeader from '../ItemHeader'
import ItemComponent from '../ItemComponent'
export class HomePage extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <FilterBlock/>
                <ItemHeader/>
                <ItemComponent/>
            </div>
        )
    }
}

export default HomePage
