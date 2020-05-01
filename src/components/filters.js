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

  compareDates(date1, date2){
    let dayInMillis=24*3600000;
    let days1=Math.floor(date1/dayInMillis);
    let days2=Math.floor(date2.getTime()/dayInMillis);
    // comparamos los días
    if (days1>days2) {
      return 1;
    } else if (days1<days2) {
      return -1;
    }
    return 0;
  }

  handleDateChange(event) {
    let payload = this.props.filters
    let valores = event.target.name;
    switch(valores) {
      case 'dateFrom':
        if(this.compareDates(Date.parse(event.target.value), new Date()) != -1) {
          payload[event.target.name] = event.target.value;
          payload['dateTo'] = event.target.value;
          this.props.onFilterChange(payload)
        } else {
          this.props.onFilterChange(payload)
        }
        break;
      case 'dateTo':
        if(Date.parse(event.target.value) < Date.parse(this.props.filters.dateFrom)) {
          this.props.onFilterChange(payload)
          console.log('entró')
        } else {
          payload[event.target.name] = event.target.value;
          this.props.onFilterChange(payload);
        }
        break;
      default: console.log('default');
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
