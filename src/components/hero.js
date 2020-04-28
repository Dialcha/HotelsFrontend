import React from 'react';
import * as moment from 'moment';
import localization from 'moment/locale/es';
moment.updateLocale('es', localization);

export default class Hero extends React.Component {
    constructor(props) {
        super(props)
        this.props = {
            filters: {
                dateFrom: new Date(),
                dateTo: new Date(),
                country: undefined,
                price: undefined,
                rooms: undefined
            }
        }
    }

    render() {
        let desde = moment(this.props.filters.dateFrom).format('dddd, LL');
        let hasta = moment(this.props.filters.dateTo).format('dddd, LL');
        let pais = this.props.filters.country;
        let precio = this.props.filters.price;
        let tamaño = this.props.filters.rooms;

        return(
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Hoteles</h1>
                    <h2 className="subtitle">
                        Desde el <strong>{ desde }</strong> hasta el <strong>{ hasta }</strong>
                        { pais !== undefined ? ` en ${ pais }` : ''}
                        { precio !== undefined ? ` desde ${ precio }` : ''}
                        { tamaño !== undefined ? ` con máximo ${ tamaño } habitaciones` : ''}
                    </h2>
                </div>
            </div>
        </section>
        )
    }
  }