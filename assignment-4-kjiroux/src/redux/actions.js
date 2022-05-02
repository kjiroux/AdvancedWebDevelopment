
// Products in Store
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';


// User Cart
export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';


// Products in Store

export function addProduct(productID, amount) {
    return {
        type: ADD_PRODUCT,
        productID: productID,
        amount: amount
    };
}

export function removeProduct(productID, amount) {
    return {
        type: REMOVE_PRODUCT,
        productID: productID,
        amount: amount
    };
}

export function receiveProducts(product) {
    return {
        type: RECEIVE_PRODUCTS,
        productID: product.id,
        product

    }

}


// User Cart

export function addCart(productID, amount, name, price) {
    //console.log(productID)
    return {
        type: ADD_CART,
        productID: productID,
        amount: amount,
        name: name,
        price: price
    };
}

export function removeCart(productID, quantity) {
    return {
        type: REMOVE_CART,
        productID: productID,
        quantity: quantity
    };
}