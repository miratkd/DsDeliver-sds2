import React, { useEffect, useState } from 'react';
import {fetchOrders} from '../api';
import Loader from '../Orders/Loader';
import { PendingOrder } from '../Orders/Types';
import OrderCard from './OrderCard';
import './styless.css';

const Admin = () => {
    const [isLoading, setIsloading] = useState(false);
    const [orderData, setOrderData] = useState<PendingOrder[]>([]);

    useEffect(() => {
        setIsloading(true);
        fetchOrders()
        .then(response => setOrderData(response.data))
        .catch(error => console.log(error))
        .finally(() => setIsloading(false)
        );

        
    },[]);
    return(
        <div className="admin-container">
            {isLoading ?
             <Loader/> 
             : 
             orderData.map(order => (
                 <OrderCard order={order}/>
             ))
             }
        </div>
    )
}

export default Admin;