import styled from '@emotion/styled/macro';
import React from 'react';
import { useSelector } from 'react-redux';

import Product from './Product';
import { getProducts } from '../redux/selectors';

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

const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    margin: auto;
    width: 80%;
    padding: 10px;

    border-left:    9px solid #FF83C3;
    border-right:   9px solid #FF83C3;
    border-bottom:  9px solid #FF83C3;
    border-bottom-left-radius:  30px;
    border-bottom-right-radius: 30px;

    background-color: #14D0F0;

    margin-bottom: 150px;


`;

function ProductList(props) {

    const products = Object.values(useSelector(getProducts));

    //console.log("PRODUCTLIST: ", products)


    return (
        <ProductContainer>
            {products.map(product => <Product key={product.id} {...product}/>)}
        </ProductContainer>
        )
}

export default ProductList;