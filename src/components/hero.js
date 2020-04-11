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
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let desde = moment(this.props.filters.dateFrom).format('dddd, LL');
        let hasta = moment(this.props.filters.dateTo).format('dddd, LL');

        return(
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Hoteles</h1>
                    <h2 className="subtitle">
        Desde el <strong>{ desde }</strong> hasta el <strong>{ hasta }</strong>
                    </h2>
                </div>
            </div>
        </section>
        )
    }
  }