/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';

import styled from '@emotion/styled/macro';

// Components
import ProductList from './components/ProductList';
import Spinner from './components/Spinner';
import Navbar from './components/Navbar';
import Cart from './components/Cart';


// Redux-related
import { useDispatch } from 'react-redux';
import { receiveProducts } from './redux/actions';

// Hooks
import useProducts from './hooks/useProducts';

const Page = styled.div`

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;

    background: repeating-linear-gradient(
        to right,
        #f8c7dd,
        #f8c7dd 20px,
        #fbd6e8 20px,
        #fbd6e8 40px
    );

    h1 { float: right; };

    
    
`;

const Store = styled.div`
    padding-top: 14em;
`;


function App() {

    const dispatch = useDispatch();
    var storeProducts = useProducts();
    //console.log(storeProducts)

    // while the products are being retrieved with the custom hook, 
    // use the effect hook to dispatch the action, which adds the 
    // product to the store
    useEffect(() => {
        if (storeProducts.isLoading === false) {
            //for (let i = 1; i <= storeProducts.products.length; i++) {
            //    const addProduct = receiveProducts(storeProducts.products[i]);
            //    dispatch(addProduct);
            //}
            storeProducts.products.forEach(product => {     
                dispatch(receiveProducts(product));
            });
        }

    }, [storeProducts.isLoading])

    return (
        <Page>
            <Navbar />
            {storeProducts.isLoading ?
                <Spinner />
                :
                <Store>
                    <ProductList products={storeProducts.products} />
                    <Cart />

                </Store>
            }
        </Page>
  );
}

export default App;
