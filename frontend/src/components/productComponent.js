import React, { useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useHistory } from "react-router-dom";
import { store } from "../store";
//import React, { useState, useEffect } from 'react';
import "./productComponent.css";


const ProductComponent = () => {


    /*this.onClickQtyAdd = this.onClickQtyAdd.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onClickQtyRemove = this.onClickQtyRemove.bind(this);
    this.unitChanger = this.unitChanger.bind(this);*/
    let displayUnit = "gms";
    /*this.state = {
        orderedQuantity: 500
    }*/
    //const [orderedQuantity, setOrderedQty] = useState(500);
    const globalState = useContext(store);
    const { state, dispatch } = globalState;

    let Qty = state.orderedQuantity;
    //console.log(state);
    //console.log(Qty);

    const history = useHistory();


    const onClickQtyAdd = () => {
        //console.log('test add')
        /*this.setState({
            orderedQuantity: this.state.orderedQuantity + 100
        });*/
        //setOrderedQty(orderedQuantity + 100);
        dispatch({ type: 'onClickQtyAdd' });
        //this.unitChanger();
    }

    const onReset = () => {
        /*this.setState({
            orderedQuantity: 500
        });*/
        //setOrderedQty(500);
        dispatch({ type: 'onReset' });
        //this.unitChanger();
    }

    const onClickQtyRemove = () => {
        if (state.orderedQuantity > 500) {
            /*this.setState({
                orderedQuantity: this.state.orderedQuantity - 100
            });*/
            dispatch({ type: 'onClickQtyRemove' });
            //this.unitChanger();
        }
    }

    const unitChanger = () => {
        //console.log('TEST print')
        displayUnit = (state.orderedQuantity >= 1000) ? "kgs" : "gms";
        Qty = state.orderedQuantity;
        if (Qty >= 1000) {
            Qty = Qty / 1000;
        }
        //console.log(this.Qty);
    }

    const handleClick = () => {
        dispatch({
            type: 'orderQuantityWithUnit',
            payload: Qty + ' ' + displayUnit
        })
        history.push("/newOrder");
    }

    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Fresh Shrimps</h1>
                    <p>
                        Fresh from the seas, directly to your home. All you've to do is order below. Click the button below to know how we do it.
                        </p>
                    <Button id="learnMore">Learn More</Button>
                </Container>
            </Jumbotron>
            <div id="productQty" className="d-flex justify-content-center">
                <div>
                    <Card style={{
                        background: '#e3dddc',
                        margin: '0 5em 0 0',
                    }}>
                        <Card.Img variant="top" src="https://5.imimg.com/data5/MA/HD/MY-37506196/fresh-black-tiger-prawns-500x500.jpg" />
                        <Card.Body>
                            <Card.Title>Tiger Prawn</Card.Title>
                            <Card.Text>
                                Price: Rs 500/Kg
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <div>
                        <InputGroup className="mb-3">
                            <FormControl disabled={true}
                                onChange={unitChanger()}
                                placeholder={Qty}
                                aria-label="Enter Quantity"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2">{displayUnit}</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                    <div id="QtySelector">
                        <Button variant='secondary' onClick={onClickQtyRemove}>-</Button>
                        <Button variant='light' onClick={onReset}>Reset</Button>
                        <Button variant='secondary' onClick={onClickQtyAdd}>+</Button>
                    </div>
                    <div id="orderNow">
                        <Button variant="outline-success" size="lg" onClick={handleClick}>
                            Order Now
                </Button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductComponent;