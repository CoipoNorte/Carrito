import React from 'react';
import { CardImg, ModalFooter, ModalBody, ModalHeader, Modal, Button, Container } from 'reactstrap';
import './productsheet.css';
import data from '../listShoppingCart.json';

class ProductSheet extends React.Component {
    constructor(props) {
        super();

        this.state = {
            modal: false,
            data
        };

        this.toggle = this.toggle.bind(this);
        this.addShoppingCart = this.addShoppingCart.bind(this)
        console.log(JSON.stringify(props.props, ['title', 'subtitle', 'text', 'img']));
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    addShoppingCart() {
        data.push({
            "title": this.props.props.title,
            "price": this.props.props.subtitle
        });
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <Container>
                <Button onClick={this.toggle}>ver ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>
                        {this.props.props.title}
                    </ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.img}/>
                            <p>Detalles del producto:</p>
                            <p>Valor $<b>{this.props.props.subtitle}</b></p>
                            <p>Stock: <b>{this.props.props.stock}</b></p>
                            {this.props.props.text}
                    </ModalBody>
                    <ModalFooter className='modalFooter'>
                        <Button onClick={this.addShoppingCart} color="primary">Add to cart</Button>
                        <Button onClick={this.toggle} color="secondary">Return</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default ProductSheet;