import React from 'react';
import { Container, Row } from 'reactstrap';
import Product from './components/product';
import Navegacion from './components/navigation';
import './App.css';
import data from './listProducts.json';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      listProducts: data.listProducts
    };
  }

  render() {
    const arrayComponents = this.state.listProducts.map((product, i) => {
      return (
        <Product
          key={i}
          title={product.title}
          subtitle={product.subtitle}
          text={product.text}
          stock={product.stock}
          img={product.img}
        />
      );
    });

    return (
      <Container>
        <Navegacion title="Mi primer sitio de compras en React" />
        <Row>
          {arrayComponents}
        </Row>
      </Container>
    );
  }
}

export default App;
