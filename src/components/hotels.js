import React from "react";
import Hotel from './hotel'

export default class Hotels extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const hoteles = this.props.hotels;
    return (
      <section className="section" style={{ marginTop: "3em" }}>
        <div className="container">
          <div className="columns is-multiline">
          {
              hoteles.map( hotel => {
                  return(
                    <div className="column is-one-third">
                      <Hotel hotel={ hotel } key={hotel.name} />
                    </div>)
                }
              )
            } 
          </div>
        </div>
      </section>
    );
  }
}
