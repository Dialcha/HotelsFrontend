import React from "react";
import '../App.css';
import DateFilter from './datefilter';
import OptionsFilter from './optionsfilter';

export default class Filters extends React.Component {
  constructor(props) {
    super(props);
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
    return (
      <nav className="navbar is-info" style={{ justifyContent: "center" }}>
        <div className="navbar-item">
          <DateFilter date={this.props.filters.dateFrom} icon="fa-sign-in-alt" />
        </div>
        <div className="navbar-item">
          <DateFilter date={this.props.filters.dateTo} icon="fa-sign-out-alt" />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            options={[
              { value: undefined, name: "Todos los países" },
              { value: "Argentina", name: "Argentina" },
              { value: "Brasil", name: "Brasil" },
              { value: "Chile", name: "Chile" },
              { value: "Uruguay", name: "Uruguay" },
            ]}
            selected={this.props.filters.country}
            icon="fa-globe"
          />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            options={[
              { value: undefined, name: "Cualquier precio" },
              { value: 1, name: "$" },
              { value: 2, name: "$$" },
              { value: 3, name: "$$$" },
              { value: 4, name: "$$$$" },
            ]}
            selected={this.props.filters.price}
            icon="fa-dollar-sign"
          />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            options={[
              { value: undefined, name: "Cualquier tamaño" },
              { value: 10, name: "Hotel pequeño" },
              { value: 20, name: "Hotel mediano" },
              { value: 30, name: "Hotel grande" },
            ]}
            selected={this.props.filters.rooms}
            icon="fa-bed"
          />
        </div>
      </nav>
    );
  }
}
