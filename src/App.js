import React from 'react';
import './App.css';
import { today, hotelsData } from './data/data'
import Hero from './components/hero';
import Filters from './components/filters';

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
    }

    render() {
        return(
            <div>
                <Hero filters={ this.state.filters}/>
                <Filters filters={ this.state.filters } />
            </div>
        )
    }
}