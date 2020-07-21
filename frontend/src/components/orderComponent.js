import React, { useContext } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Card, Col, Form, Button } from 'react-bootstrap';
import './orderComponent.css';
import { store } from "../store";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const OrderComponent = () => {

    const tempDate = new Date();
    const globalState = useContext(store);
    const { state, dispatch } = globalState;
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        const date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
        //alert(Qty);

        const newOrder = {
            orderQty: state.orderedQuantity,
            customerName: state.customerName,
            customerAddress: state.customerAddress,
            customerPhone: state.customerPhone,
            transactionDate: date
        };
        /*console.log(state.orderedQuantity);
        console.log(state.customerName);*/

        axios.post('http://localhost:4000/orders/add', newOrder)
            .then(res => console.log(res.data));

        history.push('/confirm');
    }

    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Where do you want us to deliver?</h1>
                </Container>
            </Jumbotron>
            <div className="d-flex justify-content-around">
                <div>
                    <Card style={{
                        background: '#e3dddc',
                        margin: '0 5em 0 0',
                        minHeight: '20em'
                    }}>
                        <Card.Body>
                            <Card.Title>Order Details</Card.Title>
                            <Card.Text>
                                <p>
                                    Ordered Quantity : {state.orderedQtyWithUnit}
                                </p>
                                <p>
                                    Total Due : Rs {(state.orderedQuantity/1000)*500}
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div id="addForm">
                    <Form onSubmit={onSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder=""
                                    onChange={e => dispatch({ type: 'nameUpdate', payload: (e.target.value) })} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder=""
                                    onChange={e => dispatch({ type: 'phoneUpdate', payload: (e.target.value) })} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder=""
                                onChange={e => dispatch({ type: 'addrUpdate', payload: (e.target.value) })} />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>West Bengal</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button id="submitOrder" variant="outline-success" type="submit" size="lg">
                            Make Payment
                    </Button>
                    </Form>
                </div>
            </div>


        </div>
    );
}

export default OrderComponent;