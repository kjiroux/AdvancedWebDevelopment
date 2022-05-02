import { combineReducers } from 'redux';


import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    RECEIVE_PRODUCTS,
    ADD_CART,
    REMOVE_CART,
} from './actions';

// STORE:  {products: {…}, cart: Array(0)}



// for actions RECEIVE_PRODUCTS, ADD_PRODUCT, and REMOVE_PRODUCT
function productsReducer(state = [], action) {

    
    const id = action.productID;    // get which product it is from the action, product[id]

    switch (action.type) {

        case RECEIVE_PRODUCTS:
            console.log("-- productsReducer: ", action.type)
            return {
                ...state,
                [id]: action.product    // add product at this id
            };

        case ADD_PRODUCT:
            console.log("-- productsReducer: ", action.type)

            return {
                ...state,
                [id]: {             // at this particular id
                    ...state[id],
                    inStock: state[id].inStock + action.amount
                }
            };

        case REMOVE_PRODUCT:
            console.log("-- productsReducer: ", action.type)
            return {
                ...state,
                [id]: {             // at this particular id
                    ...state[id],
                    inStock: state[id].inStock - action.amount
                }
            };
           
        default:
            return state;

    }
}


// STORE: { products: { … }, cart: { … } }

// for actions ADD_CART and REMOVE_CART
function cartReducer(state = [], action) {

    switch (action.type) {    
        case ADD_CART:
            console.log("-- cartReducer: ", action.type)

            if (state[action.productID]) {
                return {
                    ...state,
                    [action.productID]: {
                        ...state[action.productID],
                        quantity: state[action.productID].quantity + action.amount
                    }
                    
                    
                };
            }

            return {
                ...state,
                [action.productID]: {
                    quantity: action.amount,
                    name: action.name,
                    price: action.price,
                    id: action.productID
                }
            };

        case REMOVE_CART:
            console.log("-- cartReducer: ", action.type)
            //console.log(state)
            //console.log("id: ", action.productID)

            var newCart = []
            var id = action.productID
            for (var i in state) {
                //console.log(i, id)
                if (id != i) {
                    //console.log("Loop: ", state[i])
                    newCart[i] = state[i]
                }
            }


            return newCart;

        default:
            return state;

    }
}

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

export default rootReducer;