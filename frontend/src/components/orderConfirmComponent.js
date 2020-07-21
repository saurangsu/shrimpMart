import React, { useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';
import { store } from "../store";
//import React, { useState, useEffect } from 'react';
import "./productComponent.css";


const OrderConfirmComponent = () => {

    const tempDate = new Date();
    const globalState = useContext(store);
    const { state, dispatch } = globalState;
    const date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();

    return (
        <div>
            <Card style={{
                background: '#e3dddc',
                margin: '3em 0 3em 0',
            }}>
                <Card.Body>
                    <Card.Title>Order Confirmed!</Card.Title>
                    <Card.Text>
                        <p>
                            Name: {state.customerName}
                        </p>
                        <p>
                            Address: {state.customerAddress}
                        </p>
                        <p>
                            Phone: {state.customerPhone}
                        </p>
                        <p>
                            Quantity Ordered: {state.orderedQtyWithUnit}
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default OrderConfirmComponent;