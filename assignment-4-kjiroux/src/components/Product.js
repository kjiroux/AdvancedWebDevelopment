import styled from '@emotion/styled/macro';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addCart, removeProduct } from '../redux/actions';
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
    border: 3px solid hotpink;
    border-radius: 30px;
    margin: 3px;
    display: block;
    width: 20%;
    background-color: #FEE3EC;
    text-align: center;
    mix-blend-mode: normal;

    img {
        width: 80%;
        height: 250px;
        object-fit: contain;
        border: 2px solid #FFE552;
        box-shadow: 5px 5px 9px #888888;;
        margin: 10px;
        background-color: white;
        position: center;
        border-radius: 10px;
    };

    form {
        display: inline-block;
        padding-bottom: 10px;
        input {
            width: 50px;
        };
    };


`;

const Item = styled.div`
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    background-color: white;
    color: #7F73FF;

    h3 {
        width:50%;
        display: inline-block;

    }
    h4{
        width:30%;
        display: inline-block;
    }

`

function GetInStock(id) {

    const products = useSelector(getProducts);
    var inStock = 0;

    if (products.length !== 0) {        // This keeps it from running while the products are loading
        //console.log("GET IN STOCK:", products[id].inStock);
        inStock = products[id].inStock;
    }

    //console.log(products[id].inStock)

    return inStock;

}

function Product({ id, name, price, photoUrl }) {

    const [quantity, setQuantity] = useState("");
    const dispatch = useDispatch();

    const stock = GetInStock(id);

    //console.log(id)

    return (
        <ProductContainer>
            <img src={photoUrl} alt={name} />
            <Item><h3>{name}</h3><h4>${price}</h4></Item>

            
            <form onSubmit={(e) => {
                if (quantity === '') {
                    e.preventDefault();
                    alert("You must enter a quantity.")
                    
                }
                else {
                const q = parseInt(quantity)
                //console.log(q)

                    if (q > stock) {
                        alert("You can't purchase more than what is available!")
                        e.preventDefault();
                    }
                    else {
                        e.preventDefault();
                        dispatch(addCart(id, q, name, price));
                        dispatch(removeProduct(id, q));
                        setQuantity("");
                    }
                }


            }}>
                {stock === 0 ? <h4>Out of Stock</h4> : <h4>{stock} In Stock</h4>}

                <input value={quantity} placeholder="0" onChange={(e) => setQuantity(e.target.value)}></input>
                <button disabled={stock === 0 ? true : false }> Add to Cart </button>
            </form>
            
        </ProductContainer>
    )
}

export default Product;