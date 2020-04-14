import React from "react";

export default class DataTag extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="control">
              <div className="tags has-addons">
                <span className="tag is-medium is-info">
                  <i className={"fas" + " " + this.props.icon}></i>
                </span>
                <span className="tag is-medium">{ this.props.descripcion }</span>
              </div>
            </div>
        )
    }
}