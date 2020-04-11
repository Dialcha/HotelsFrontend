import React from "react";
import * as moment from 'moment';

export default class DateFilter extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      date: "",
      icon: "",
    };
  }

  render() {
    let fecha = moment(this.props.date).format("YYYY-MM-DD");
    console.log(fecha);
    return (
      <div className="field">
        <div className="control has-icons-left">
          <input className="input" type="date" value={fecha}/>
          <span className="icon is-small is-left">
            <i className={"fas" + " " + this.props.icon}></i>
          </span>
        </div>
      </div>
    );
  }
}
