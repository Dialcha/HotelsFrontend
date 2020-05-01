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
          {hoteles.length === 0 ? (
                            <article className="message is-warning">
                                <div className="message-body">
                                    No se han encontrado hoteles que coincidan con los parámetros
                                    de búsqueda.
                              </div>
                            </article>
                        ) : (
              hoteles.map( hotel => {
                  return(
                    <div className="column is-one-third">
                      <Hotel hotel={ hotel } />
                    </div>)
                }
              )
            )
          }
          </div>
        </div>
      </section>
    );
  }
}
