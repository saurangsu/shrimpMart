import React, { createContext, useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'onClickQtyAdd':
            return {
                ...state, orderedQuantity: state.orderedQuantity + 100
            };
        case 'onReset':
            return {
                ...state, orderedQuantity: 500
            };
        case 'onClickQtyRemove':
            return {
                ...state, orderedQuantity: state.orderedQuantity - 100
            };
        case 'nameUpdate':
            return {
                ...state, customerName: action.payload
            };
        case 'addrUpdate':
            return {
                ...state, customerAddress: action.payload
            };
        case 'phoneUpdate':
            return {
                ...state, customerPhone: action.payload
            };
        case 'orderQuantityWithUnit':
            return {
                ...state, orderedQtyWithUnit: action.payload
            };
        default:
            throw new Error();
    };
}

const initialState = {
    orderedQuantity: 500,
    customerName: '',
    customerAddress: '',
    customerPhone: '',
    orderedQtyWithUnit: '500 gms'
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }