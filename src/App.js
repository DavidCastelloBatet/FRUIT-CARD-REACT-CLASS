import React from "react";
import TarjetaFruta from "./TarjetaFruta";
import styled from "styled-components";

//estilos styled components
const Titulo = styled.h1`
  background-color: black;
  color: white;
  padding: 5px;
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

//logica del componente

class App extends React.Component {
  render() {
    return (
      <>
        <Titulo>LISTADO DE FRUTAS</Titulo>
        <Container>
          <TarjetaFruta name={"Sandia"} price={2.0} />
          <TarjetaFruta name={"Naranja"} price={1.5} />
          <TarjetaFruta name={"Kiwi"} price={3.33} />
          <TarjetaFruta name={"Uva"} price={1.1} />
          <TarjetaFruta name={"Platano"} price={2.2} />
          <TarjetaFruta name={"Melón"} price={4.3} />
        </Container>
      </>
    );
  }
}

export default App;
