import React, { Component } from 'react'
import Banner from '../Banner'
import FilterBlock from '../FilterBlock'
export class HomePage extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <FilterBlock/>
            </div>
        )
    }
}

export default HomePage
