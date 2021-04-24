import React from 'react';
import { toast } from 'react-toastify';
import { deliver } from '../api';
import { PendingOrder } from '../Orders/Types';
import './styless.css';


type Props = {
    order: PendingOrder;
}

const OrderCard = ({order}: Props) => {
    const setDelivered = () => {
        deliver(order.id)
        .then(() => toast.error("Produto entregue"))
        .catch(error => toast.warning(error))

    }

    return (
        <div className="order-card-containear">
            <div className="order-number-container">
                <div className="order-number-text">
                    Numero<br/> do pedido:
                </div>
                <div className="order-number">
                    {order.id}
                </div>
            </div>
            <div className="order-address">
                {order.address}
            </div>
            <div className="order-products">
                {order.products.map(product => {
                    return (
                        <div>- {product.name}</div>
                    )
                })}
            </div>
            <button className="order-button" onClick={setDelivered}>
                Confirmar<br/>entrega
            </button>
        </div>
    )
}

export default OrderCard;