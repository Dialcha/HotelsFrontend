import React from "react";
import '../App.css';
import DateFilter from './datefilter';
import OptionsFilter from './optionsfilter';


export default class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    }

  handleDateChange(event) {
    let payload = this.props.filters
    if( event.target.name === 'dateFrom' && Date.parse(event.target.value) < new Date()){ // Revisa que la fecha de entrada no sea menor a hoy
      this.props.onFilterChange(payload)
    } else if( event.target.name === 'dateTo' &&
    Date.parse(event.target.value) < this.props.filters.dateFrom) { // Revisa que la fecha de salida no sea menor a la de entrada
      this.props.onFilterChange(payload)
    } else {
      payload[event.target.name] = event.target.value
      this.props.onFilterChange(payload)
    }

  }

  handleOptionChange(event) {
    let payload = this.props.filters
    payload[event.target.name] = event.target.value
    this.props.onFilterChange(payload)
  }

  render() {
    return (
      <nav className="navbar is-info" style={{ justifyContent: "center" }}>
        <div className="navbar-item">
          <DateFilter
            date={this.props.filters.dateFrom}
            icon="fa-sign-in-alt"
            onDateChange={ this.handleDateChange }
            name={'dateFrom'}/>
        </div>
        <div className="navbar-item">
          <DateFilter
            date={this.props.filters.dateTo}
            icon="fa-sign-out-alt"
            onDateChange={ this.handleDateChange }
            name={'dateTo'}/>
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
            onOptionChange={ this.handleOptionChange }
            name={'country'}
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
            onOptionChange={ this.handleOptionChange }
            name={'price'}
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
            onOptionChange={ this.handleOptionChange }
            name={'rooms'}
          />
        </div>
      </nav>
    );
  }
}
