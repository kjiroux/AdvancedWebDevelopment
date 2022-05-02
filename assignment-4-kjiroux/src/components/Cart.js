/** @jsxImportSource @emotion/react */

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

import React, { useState } from 'react';

import { css } from '@emotion/react'

import CartList from './CartList';
import { useSelector } from 'react-redux';
import { getCart } from '../redux/selectors';

const sty = css`
    position: fixed;
    top: 30px;
    right: 30px;
    background-color: #14D0F0;
    padding: 10px;
    border-radius: 10px;
    border: 9px double white;
    color: white;
    text-shadow: 0 0 5px #7F73FF, 0 0 3px #7F73FF;

`;


function Cart() {

    const [showCart, setShowCart] = useState(false);
    const cart = useSelector(getCart)
    const cartToggle = () => {
        setShowCart(current => !current)
        //console.log(showCart)
    }

    const cartentries = Object.values(cart)
    var cartitems = 0
    if (cartentries.length !== 0) {

        cartentries.forEach(item => {
            cartitems++;
        })
    }
    else {
        cartitems = 0;
    }
 
    if (showCart) {
        if (cartentries.length !== 0) {
            //console.log("show")
            return (
                <div>
                    <div css={sty} onClick={cartToggle} >
                        <h1>Cart ({cartitems})</h1>
                    </div>
                    <CartList />
                </div>
            )
        }
        return (
            <div css={sty} onClick={cartToggle} >
                <h1>Cart ({cartitems})</h1>
            </div>
        )
    }
    else {
        //console.log("hide")
        return (
            <div css={sty} onClick={cartToggle} >
                <h1>Cart ({cartitems})</h1>
            </div>
        )
    }




}

export default Cart;