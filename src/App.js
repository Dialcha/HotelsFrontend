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
            initialHotels: [],
            isAllLoaded: false
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentDidMount() {
        fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica')
        .then(response => response.json())
        .then(data=> this.setState({
            hotels: data,
            initialHotels: data,
            isAllLoaded: true
        }))
        .catch(error => console.error(error));
    }

    componentWillUnmount() {
        this.setState({
            hotels: []
          })
    }

    warning() {
        return (
            <section className="section" style={{ marginTop: "3em" }}>
                <div className="container">
                    <article className="message is-warning">
                        <div className="message-body">
                            No se han encontrado hoteles con los criterios definidos
                        </div>
                    </article>
                </div>
            </section>
        );
      }

        filterHotels(payload,hotels) {
            const { dateFrom, dateTo, country, price, rooms} = payload;
            console.log(payload)
            console.log(hotels)
            return hotels.filter(hotel => {
                return (
                    (payload.dateFrom == "" ? true : moment(hotel.availabilityFrom).format("YYYY-MM-DD") >= moment(dateFrom).format("YYYY-MM-DD")) &&
                    (payload.dateTo == "" ? true : moment(hotel.availabilityTo).format("YYYY-MM-DD") >= moment(dateTo).format("YYYY-MM-DD")) &&
                    (hotel.country === ((country == undefined || country == 'Todos los países') ? hotel.country : country)) &&
                    (hotel.price <= ((price == undefined || price == 'Cualquier precio') ? hotel.price : parseInt(price))) &&
                    (payload.rooms === undefined || payload.rooms == 'Cualquier tamaño' ? true :
                    (hotel.rooms < payload.rooms && hotel.rooms >= payload.rooms - 10) ||
                    (payload.rooms > 20 && hotel.rooms > 20))
                    )
                    
            })
        }

    handleFilterChange(payload) {
        this.setState({
          filters: payload,
          hotels: this.filterHotels(payload, this.state.initialHotels)
        })
      }

    render() {
        return(
            <div>
                <Hero filters={ this.state.filters}/>
                <Filters filters={ this.state.filters } onFilterChange={ this.handleFilterChange }/>
                <Hotels hotels={ this.state.hotels } />
                {((this.state.isAllLoaded = false) || (this.state.hotels = [])) ? (
                    this.warning()
                ) : (
                    <Hotels hotels={ this.state.hotels } />
                )}
            </div>
        )
    }
}