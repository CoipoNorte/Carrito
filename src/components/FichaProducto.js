import React from "react";
import { Button, CardImg, Container, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import './FichaProducto.css';
import { listaCarrito } from '../listaCarrito.json';

class FichaProducto extends React.Component {
    constructor(props) {

        super();

        this.state = {
            modal: false,
            listaCarrito,
            stock: props.props.stock
        };

        this.toogle = this.toogle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }

    toogle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    agregarCarrito() {
        this.setState(prevState => ({ //muestra el estado del modal, abierto cerrado, para que sea vea
            modal: !prevState.modal
        }))

        if (this.state.stock > 0) { //validacion para que el stock no quede negativo

            listaCarrito.push({ // vamos llenando el json carrito en este caso con el titulo y el precio 
                "titulo": this.props.props.titulo,
                "precio": this.props.props.precio
            });

            this.setState(prevState => ({
                stock: prevState.stock - 1     //una vez agregado un producto al carro, al stock le quita 1       
            }))
        } else {
            alert('Stock agotado!')
        }

        const badge = document.getElementById("BadgeCarrito");
        badge.innerText = listaCarrito.length;
    }

    render() {
        return (
            <Container>
                <Button color="primary" onClick={this.toogle}>Ver ficha</Button>
                <Modal isOpen={this.state.modal} id="myModal" backdrop={true} toggle={this.toogle} >
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen} />
                        {this.props.props.descripcion}
                        <p><br />Precio <b>CLP {this.props.props.precio}</b></p>
                        <p>Stock: <b>{this.state.stock}</b></p>
                    </ModalBody>
                    <ModalFooter className="modalFooter">
                        <Button color="success" onClick={this.agregarCarrito}>Agregar al carito</Button>
                        <Button color="secondary" onClick={this.toogle}>Volver atras</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );

    }
}

export default FichaProducto;