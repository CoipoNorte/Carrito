import React from 'react';
import { Badge, Button, Popover, PopoverBody, PopoverHeader, Table } from 'reactstrap';
import { listaCarrito } from '../listaCarrito.json';

class Carro extends React.Component {

    constructor() {

        super();

        this.state = {
            popoverOpen: false,
            listaCarrito
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }))
    }

    totalCarrito() {
        let total = 0;
        this.state.listaCarrito.forEach(
            (item) => {
                total += parseInt(item.precio, 10);
            }
        );
        return total * 1000;
    }    

    render() {
        const arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito, i) => {
                return (
                    <tr>
                        <td>{i += 1}</td>
                        <td>{listaCarrito.titulo}</td>
                        <td>{listaCarrito.precio}</td>
                    </tr>
                )
            }
        );

        return (
            <div>
                <Button id="Popover1" color="primary">
                    <span className="material-icons">shopping_cart</span>
                    <Badge color="secondary" id="BadgeCarrito">{listaCarrito.length}</Badge>
                </Button>
                <Popover
                    target="Popover1"
                    placement="bottom"
                    isOpen={this.state.popoverOpen}
                    toggle={this.toggle}
                    trigger="focus"
                >
                    <PopoverHeader>Listado de compras</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>{arregloCarrito}</tbody>
                            <tfoot>
                                <td>Total</td>
                                <td><b> CLP {Intl.NumberFormat("de-DE").format(this.totalCarrito())}</b></td>
                            </tfoot>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default Carro;