import React from 'react';
import { CardText, CardSubtitle, CardTitle, CardBody, CardImg, Col, Card } from 'reactstrap';
import './product.css';
import ProductSheet from './productsheet'

class Product extends React.Component {
    render() {
        return (
            <Col sm="4">
                <Card className='Card' body outline color='primary'>
                    <CardImg src={this.props.img} />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle><b>Valor: $ </b> {this.props.subtitle} </CardSubtitle>
                        <CardText> {this.props.text} </CardText>
                        <ProductSheet props={this.props}/>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Product;
