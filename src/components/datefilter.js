import React from "react";

export default class DateFilter extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      date: "",
      icon: "",
    };
  }

  render() {
    return (
      <div className="field">
        <div className="control has-icons-left">
          <input className="input" type="date" />
          <span className="icon is-small is-left">
            <i className={"fas" + " " + this.props.icon}></i>
          </span>
        </div>
      </div>
    );
  }
}
