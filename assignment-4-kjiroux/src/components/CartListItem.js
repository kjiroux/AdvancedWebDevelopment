import styled from '@emotion/styled/macro';

import { useDispatch } from 'react-redux';

import { removeCart, addProduct } from '../redux/actions';


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

const CartItemContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 8px;
    padding-right: 8px;
    width: 96%;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid dimgray;
    border-radius: 6px;
    margin-bottom: 1px;
    background-color: #EFBFC6;
    
    h3 {
        font-size: 18px;
        color: #FFFFFF;
        text-shadow: 0 0 3px dimgray;
    }

    h5{
        color: #FFF;
        font-size: 13px;
        text-shadow: 0 0 3px dimgray;

    };

    form {

        width: 80px;
        margin-top: auto;
        margin-bottom: auto;
        button {
            border-radius: 2px;
            border: 1px solid #FF83C3;
            box-shadow: 1px 1px 3px dimgray;
            color: #FF83C3;
        };

        button:hover {
            background-color: #FF83C3;
            border: 1px solid #white;
            color: white;
        };
    };

`;


function CartListItem({quantity, name, price, id}) {

    //console.log(name, quantity, price, id)

    const dispatch = useDispatch();

    var total = quantity * price;
    total = total.toFixed(2);

    return (
        <CartItemContainer>
            <h3>{name}</h3>
            <h5>{quantity} x {price} = {total}</h5>
            <form onSubmit={(e) => {

                e.preventDefault();
                console.log("Remove ", name)
                dispatch(removeCart(id));
                dispatch(addProduct(id, parseInt(quantity)));
                    
                
            }}>
                <button> Remove from Cart </button>
            </form>
        </CartItemContainer>
    )

}

export default CartListItem;