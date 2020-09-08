import React from "react";
import styled from "styled-components";

//estilos componentes
const Card = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(212, 228, 239, 1) 0%,
    rgba(134, 174, 204, 1) 100%
  );
  border: 1px solid black;
  border-radius: 5%;
  color: black;
  margin: 5px;
  padding: 2px;
  text-align: center;
  width: 12rem;
  h2 {
    color: orangered;
  }
  button {
    background-color: yellow;
    border: 2px solid grey;
    border-radius: 5%;
    color: black;
    font-size: 14px;
    margin-right: 2px;
    padding: 2px 6px;
    transition-duration: 0.4s;
  }
  button:hover {
    background-color: #ffd92e;
  }
  .total {
    color: var(--text-color);
  }
`;
//logica componente
class TarjetaFruta extends React.Component {
  constructor() {
    super();
    this.state = {
      cantidad: 0,
    };
  }

  sumar = () => {
    console.log("hola");
    this.setState({ cantidad: this.state.cantidad + 1 });
  };
  restar = () => {
    this.setState({ cantidad: this.state.cantidad - 1 });
  };
  restaurar = () => {
    this.setState({ cantidad: 0 });
  };

  render() {
    return (
      <Card>
        <h2>{this.props.name}</h2>
        <hr />
        <p>Precio : {this.props.price.toFixed(2)} €</p>
        <p>Cantidad : {this.state.cantidad}</p>
        <button onClick={this.sumar}>+</button>
        <button onClick={this.restaurar}>Restaura</button>
        <button onClick={this.restar}>-</button>
        <hr />
        <h3>
          Total :{" "}
          <span className="total">
            {(this.props.price * this.state.cantidad).toFixed(2)}
          </span>
        </h3>
      </Card>
    );
  }
}

export default TarjetaFruta;
