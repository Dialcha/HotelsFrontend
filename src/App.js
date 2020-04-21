import React from 'react';
import './App.css';
import * as moment from 'moment';

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
        console.log(hotelsData[2].availabilityFrom);
        console.log(moment(payload.dateFrom).toDate().valueOf());
        this.setState({
          filters: payload,
          hotels: hotelsData.filter(hotel => {
              return(
                  (payload.country === hotel.country ? true : payload.country === undefined) &&
                  (payload.price == hotel.price ? true : payload.price === undefined) &&
                  (moment(payload.dateFrom).toDate().valueOf() >= hotel.availabilityFrom) && 
                  (moment(payload.dateTo).toDate().valueOf() <= hotel.availabilityTo)
                )
          })
        })
      }

    render() {
        return(
            <div>
                <Hero filters={ this.state.filters}/>
                <Filters filters={ this.state.filters } onFilterChange={ this.handleFilterChange }/>
                <Hotels hotels={ this.state.hotels } />
            </div>
        )
    }
}