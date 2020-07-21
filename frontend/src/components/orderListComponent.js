import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Order = props => (
    <tr>
        <td>{props.order.customerName}</td>
        <td>{props.order.customerAddress}</td>
        <td>{props.order.orderQty}</td>
        <td>{props.order.customerPhone}</td>
        <td>{props.order.transactionDate}</td>
    </tr>
)

export default class OrderList extends Component {

    constructor(props) {
        super(props);
        this.state = { orders: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/orders/')
            .then(response => {
                this.setState({ orders: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    orderList() {
        return this.state.orders.map(function (currentOrder, i) {
            return <Order order={currentOrder} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Order List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Ordered Quantity</th>
                            <th>Phone Number</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.orderList()}
                    </tbody>
                </table>
            </div>
        )
    }
}