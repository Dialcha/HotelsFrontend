import React from 'react';
import './App.css';
import * as moment from 'moment';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/js/all'

// Importación de la data
import { today } from './assets/data'

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
            hotels: [],
            initialHotels: [], // No se usa en la corrección así., en la correccion usan filteredHotels y isAllLoaded
            isAllLoaded: false // added
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentDidMount() {
        fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica')
        .then(response => response.json())
        .then(data=> this.setState({
            hotels: data,
            initialHotels: data,
            isAllLoaded: true //added
        }))
        .catch(error => console.error(error));
    }

    warning() { // Added
        return (
          <article className="message is-warning">
            <div className="message-body">
              No se han encontrado hoteles con los criterios definidos
            </div>
          </article>
        );
      }

    filtraHoteles(payload, hotels) {
        return hotels.filter(hotel => {
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
        }

    handleFilterChange(payload) {
        console.log(payload);
        this.setState({
          filters: payload,
          hotels: this.filtraHoteles(payload, this.state.initialHotels)
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