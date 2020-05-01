import React from "react";
import DataTag from "../components/datatag";

export default class Hotel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const hotel = this.props.hotel
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={ hotel.photo } alt={ hotel.slug } />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{ hotel.name }</p>
          <p>{ hotel.description }</p>
          <div
            className="field is-grouped is-grouped-multiline"
            style={{ marginTop: "1em" }}
          >
            <DataTag
              icon={"fa-map-marker"}
              descripcion={ hotel.city }
            />
            <DataTag icon={"fa-bed"} descripcion={ hotel.rooms + " Habitaciones"} />
            <div className="control">
              <div className="tags">
                <span className="tag is-medium is-info">
                  <i
                    className="fas fa-dollar-sign"
                    style={{ margin: "0 .125em" }}
                  ></i>
                  <i
                    className="fas fa-dollar-sign"
                    style={
                      hotel.price >= 2 ? { margin: '0 .125em' }: { margin: '0 .125em', opacity: '.25' }
                    }
                  ></i>
                  <i
                    className="fas fa-dollar-sign"
                    style={
                      hotel.price >= 3 ? { margin: '0 .125em' }: { margin: '0 .125em', opacity: '.25' }
                    }
                  ></i>
                  <i
                    className="fas fa-dollar-sign"
                    style={
                      hotel.price >= 4 ? { margin: '0 .125em' }: { margin: '0 .125em', opacity: '.25' }
                    }
                  ></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <a
            href="javascript:alert('No implementamos esto aún :(')"
            className="card-footer-item has-background-primary has-text-white has-text-weight-bold"
          >
            Reservar
          </a>
        </div>
      </div>
    );
  }
}
