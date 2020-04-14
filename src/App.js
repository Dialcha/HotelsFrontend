import React from 'react';
import './App.css';
import { today, hotelsData } from './assets/data'

import Hero from './components/hero';
import Filters from './components/filters';
import Hotel from './components/hotel'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filters: {
                dateFrom: today,
                dateTo: new Date(today.valueOf() + 86400000),
                country: undefined,
                price: undefined,
                rooms: undefined
            }
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(payload) {
        this.setState({
          filters: payload
        })
      }

    render() {
        return(
            <div>
                <Hero filters={ this.state.filters}/>
                <Filters filters={ this.state.filters } onFilterChange={ this.handleFilterChange }/>
                <Hotel hotel={ hotelsData[0] }/>
            </div>
        )
    }
}