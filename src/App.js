import React from 'react';
import './App.css';

// Importación de la data
import { today, hotelsData } from './assets/data'

// Componentes usados
import Hero from './components/hero';
import Filters from './components/filters';
import Hotels from './components/hotels'

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
            },
            hotels: hotelsData
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
                <Hotels hotels={ hotelsData } />
            </div>
        )
    }
}