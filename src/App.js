import React from 'react';
import { Container, Row } from 'reactstrap';
import Product from './components/product';
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Product
          title="Super Heroe Duck"
          img="https://dojiw2m9tvv09.cloudfront.net/60480/product/X_1809-07245.png?84&time=1724047840"
          subtitle="11.991"
          text="Super Heroe Duck!!!"
        />

        <Product
          title="Chef Duck"
          img="https://dojiw2m9tvv09.cloudfront.net/60480/product/X_1898-09335.png?84&time=1724047842"
          subtitle="11.992"
          text="¡La cena está lista! Este pato chef gourmet es famoso en el mundo de Rubberduck por su mente creativa, especialmente cuando se trata de su receta personal de ducksweetsourets. ¿Eso no excita tu paladar? Gran regalo para (aspirantes) chefs."
        />

        <Product
          title="Birthday Girl Duck"
          img="https://dojiw2m9tvv09.cloudfront.net/60480/product/X_1981-04972.png?84&time=1724047843"
          subtitle="11.993"
          text="Deseos de cumpleaños felicies! Llevando presente y pastel, el pato cumpleañero de niña es muy bienvenido en cualquier fiesta de cumpleaños. Un bonito y pequeño regalo para las jóvenes y viejas cumpleañeras, también es un mensajero óptimo de regalos de poco dinero."
        />

        <Product
          title="Rainbow Duck"
          img="https://dojiw2m9tvv09.cloudfront.net/60480/product/X_2006-02387.png?84&time=1724047845"
          subtitle="11.994"
          text="¡El Pato en colores del arcoíris trae más colores al mundo y difunde nuestro lema donde quiera que vaya! El pato de goma arcoíris llena tu día de colores para alegrar tu día y bañera."
        />

        <Product
          title="Hair Stylist Duck"
          img="https://dojiw2m9tvv09.cloudfront.net/60480/product/X_2047-06037.png?84&time=1724047848"
          subtitle="11.995"
          text="Esta patita estilista te dejará destellante con sus peinados de moda."
        />
      </Row>
    </Container>
  );
}

export default App;
