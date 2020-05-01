import React from 'react';
import './App.css';
import * as moment from 'moment';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/js/all'

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
            hotels: []
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentDidMount() {
        fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica')
        .then(response => response.json())
        .then(data=> this.setState({
            hotels: data
        }))
        .catch(error => console.error(error));
    }

    handleFilterChange(payload) {
        console.log(payload);
        this.setState({
          filters: payload,
          hotels: hotelsData.filter(hotel => {
              return(
                  (payload.country === undefined || payload.country === 'Todos los países' ? true : payload.country === hotel.country) &&
                  (payload.price == hotel.price ? true : payload.price === undefined || payload.price == 'Cualquier precio' ) &&
                  (payload.dateFrom == "" ? true : moment(payload.dateFrom).toDate().valueOf() >= hotel.availabilityFrom) && 
                  (payload.dateTo == "" ? true : moment(payload.dateTo).toDate().valueOf() <= hotel.availabilityTo) &&
                  (payload.rooms === undefined || payload.rooms == 'Cualquier tamaño' ? true :
                    (hotel.rooms < payload.rooms && hotel.rooms >= payload.rooms - 10) ||
                    (payload.rooms > 20 && hotel.rooms > 20))
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