import React from "react";

export default class OptionsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
    this.props.onOptionChange(event)
  }

  render() {
      const listaOpciones = this.props.options.map(
        opcion => <option value={opcion.value}>{opcion.name}</option>
      )
    return (
      <div className="field">
        <div className="control has-icons-left">
          <div className="select" style={{ width: "100%" }}>
            <select
              style={{ width: "100%" }}
              onChange={ this.handleOptionChange }
              name={ this.props.name }>
                { listaOpciones }
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className={"fas" + " " + this.props.icon}></i>
          </div>
        </div>
      </div>
    );
  }
}
