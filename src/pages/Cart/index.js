import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total, ButtonGroup } from './styles';

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img
                                src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x"
                                alt="Tênis"
                            />
                        </td>
                        <td>
                            <strong>Tênis title</strong>
                            <span>R$ 129,90</span>
                        </td>
                        <td>
                            <ButtonGroup>
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        size={20}
                                        color="#100496"
                                    />
                                </button>
                                <input type="number" readOnly value={2} />
                                <button type="button">
                                    <MdAddCircleOutline
                                        size={20}
                                        color="#100496"
                                    />
                                </button>
                            </ButtonGroup>
                        </td>
                        <td>
                            <strong>R$ 00.00</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#100496" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>
            <footer>
                <button type="button">FINALIZAR PEDIDO</button>
                <Total>
                    <span>TOTAL</span>
                    <strong>R$ 00,00</strong>
                </Total>
            </footer>
        </Container>
    );
}