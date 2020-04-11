import React from "react";
import * as moment from 'moment';

export default class DateFilter extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      date: "",
      icon: "",
    };
    this.handleDateChange = this.handleDateChange.bind(this); //add
  }

  handleDateChange(event) {
    this.props.onDateChange(event)
  }

  render() {
    let fecha = moment(this.props.date).format("YYYY-MM-DD");
    console.log(fecha);
    return (
      <div className="field">
        <div className="control has-icons-left">
          <input className="input" type="date" value={fecha}
          onChange={ this.handleDateChange } name={ this.props.name }/>
          <span className="icon is-small is-left">
            <i className={"fas" + " " + this.props.icon}></i>
          </span>
        </div>
      </div>
    );
  }
}
