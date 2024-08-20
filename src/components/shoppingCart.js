import React from 'react';
import { Badge, Button, Popover, PopoverHeader, PopoverBody, Table } from 'reactstrap';
import data from '../listShoppingCart.json';  // Asegúrate de que la ruta sea correcta

class ShoppingCart extends React.Component {
    constructor() {
        super();
        this.state = {
            popoverOpen: false,
            data: data.listShoppingCart // Asegúrate de usar la clave correcta del JSON
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }

    render() {
        const { data } = this.state;

        // Renderizar filas del carrito de compras
        const arrayShoppingCart = data.length > 0 ? (
            data.map((item, i) => (
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan="3">No hay productos en el carrito</td>
            </tr>
        );

        return (
            <div>
                <Button id="Popover1" color='info' onClick={this.toggle}>
                    <span className="material-icons">
                        shopping_cart
                    </span>
                    <Badge color='secondary'>{data.length}</Badge>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader>
                        Carrito de Compras
                    </PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arrayShoppingCart.length > 0 ? arrayShoppingCart : <tr><td colSpan="3">No hay productos en el carrito</td></tr>}
                            </tbody>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default ShoppingCart;
