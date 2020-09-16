import React, { useState, useEffect } from 'react';
import '../css/Orders.css';
import { useStateValue } from '../Context/StateProvider';
import { db } from '../firebase/firebaseconfig';
import Order from './Order';

function Orders() {
    // eslint-disable-next-line no-unused-vars
    const [{cart,user},dispatch] = useStateValue();
    const [orders,setOrders] = useState([]);
    
    useEffect(() =>{
        if(user){
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ));
        }
        else{
            setOrders([]);
        }
    },[user])

    return (
        <div className = "orders">
            <h1>Your Orders</h1>
            <div className = "orders__order">
                {orders?.map((order,index) => (
                    <Order order = {order} key = {index}/>
                ))}
            </div>
        </div>
    )
}


export default Orders
