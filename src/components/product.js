import React from 'react';
import { Button, CardText, CardSubtitle, CardTitle, CardBody, CardImg, Col, Card } from 'reactstrap';
import './product.css';

function Product(props) {
    return (
        <Col sm="4">
            <Card className='Card' body outline color='primary'>
                <CardImg src={props.img} />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle><b>Valor: $ </b> {props.subtitle} </CardSubtitle>
                    <CardText> {props.text} </CardText>
                    <Button className='Button'>Comprar</Button>
                    <Button className='Button'>Ver ficha</Button>
                </CardBody>
            </Card>
        </Col>
    );
}

export default Product;
