import React from "react";

export default class OptionsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
        options: [],
        selected: '',
        icon: ''
    }
  }

  render() {
      const listaOpciones = this.props.options.map(
        opcion => <option value={opcion.value}>{opcion.name}</option>
      )
    return (
      <div className="field">
        <div className="control has-icons-left">
          <div className="select" style={{ width: "100%" }}>
            <select style={{ width: "100%" }}>
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
