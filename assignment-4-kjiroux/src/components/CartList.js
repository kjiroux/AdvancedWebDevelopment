/** @jsxImportSource @emotion/react */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from '@emotion/styled/macro';

import CartListItem from './CartListItem';
import { getCart } from '../redux/selectors';
import { removeCart } from '../redux/actions';

/*
 * Color Pallete
 * #FBECEC 251, 236, 236        eggshell
 * #91D18B 145, 209, 139        green
 * #E11D74 255, 29, 116         pink
 * #440047 68, 0, 71            deep purple
 *
 *
 * #efa032,
 * #46b59b,
 * #017e7f,
 * #052939;
 *
 * #35E2C3,
 * #14D0F0,
 * #7F73FF,
 * #FF83C3,
 * #FFE552;
 *
 *
 * #9EDE73;
 *
 *

 */

const Cartlist = styled.div`
    display: flex;
    position: fixed;
    top: 150px;
    right: 30px;
    width: 410px;
    max-height: 500px;
    overflow-y: auto;
    flex-direction: column;

    border: 9px double white;
    border-bottom-right-radius: 30px;
    background: repeating-linear-gradient(
        to bottom,
        #f8c7dd,
        #f8c7dd 20px,
        #fbd6e8 20px,
        #fbd6e8 40px
    );

`;

const Checkout = styled.div`


    display: flex;
    align-content: center;
    justify-content: space-between;
    flex-direction: row;

    h3{
        display: inline-block;
        padding-left: 10px;
        float: left;
        font-size: 24px;
        text-decoration: underline;
        color: white;
        text-shadow: 0 0 6px dimgray;
    };
    button {
        display: inline-block;
        margin-top: 20px;
        margin-right: 10px;
        float: right;
        width: 160px;
        height: 30px;
        font-size: 24px;
        border-radius: 30px;
        border: 1px solid #14D0F0;
        color: #14D0F0;
        
    };
        button:hover {
            background-color: #14D0F0;
            border: 1px solid #white;
            color: white;
        };

`;



function CartList(props) {

    const cart = Object.values(useSelector(getCart));

    //console.log("CART LIST: ", cart)
    const dispatch = useDispatch();

    var total = 0;
    cart.forEach(entry => {
        total += entry.price * entry.quantity;
    })

    total = total.toFixed(2);

    return (
        <Cartlist>
            <div>
                {cart.map(product => <CartListItem  key={product.id} {...product} />)}
            </div>
            <Checkout>
                <h3>Total: ${total}</h3>
                <form onSubmit={(e) => {

                    e.preventDefault();
                    cart.forEach(product => {
                        dispatch(removeCart(product.id));
                    });


                }}>
                    <button>Checkout</button>
                </form>
            </Checkout>
        </Cartlist>
    )
}

export default CartList;