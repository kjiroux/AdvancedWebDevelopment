/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { css } from '@emotion/react'


import Spinner from '../components/Spinner';
import ErrorContainer from '../components/ErrorContainer';
import useForecastWeek from '../hooks/useForecastWeek';
import NavBar from '../components/NavBar';
import WeatherCard from '../components/WeatherCard';
import Footer from '../components/Footer';

/* Color Palette 

    #E7E7DE rgb(231, 231, 222)

    #DFF6F0 RGB(223, 246, 240)
    #46B3E6 rgb(70, 179, 230)
    #4D80E4 rgb(77, 128, 228)
    #2E279D rgb(46, 39, 157)

 */

const breakpoints = {
    sm: 640,
    lg: 1024
};


const page = css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    background-image: linear-gradient(#46B3E6, #4D80E4, #2E279D);
    padding-bottom: 2.5em;


`;


const search = css`


    align-content: right;
    height: 55px;
    padding-right: 10px;
    padding-top: 15px;

    input {
        width: 300px;
        height: 30px;
        font-size: 32px;
        border-radius: 30px;
        padding: 10px;
        float: right;
    };

    button {
        float: right;
        font-size: 32px;
        border-radius: 30px;
        background-color: #2E279D;
    
    
    };

    @media (max-width: ${breakpoints.sm}px) {
        padding-left: 3px;

        height: 40px;
            input {
                width: 200px;
                height: 20px;
                font-size: 20px;
                padding: 10px;
                float: left;
            };

            button {
                font-size: 20px;
                float: left;
            };
    }

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {
        input {
            width: 250px;
            height: 25px;
            font-size: 25px;
            padding: 10px;
            float: center;
        };

        button {
            font-size: 25px;
            float: center;
        };

    }

`;


const weatherdisplay = css`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    min-height: 57vh;

    @media (max-width: ${breakpoints.sm}px) {
        justify-content: center;
        align-content: center;
    }

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {
        justify-content: center;
        align-content: center;
    }

`;



function ForecastWeek({ query }) {

    const [inputQuery, setInputQuery] = useState(query || "");
    const [searchParams, setSearchParams] = useSearchParams()

    const [forecast, isLoading, error] = useForecastWeek(query);


    //console.log("forecast: ", forecast)
    //console.log("Lists: ", forecast.list)
    //console.log(forecast.list[0].weather[0].main)

    return (
        <div css={page}>

            <NavBar />

            <form css={search} onSubmit={(e) => {
                e.preventDefault();
                setSearchParams({ q: inputQuery })
            }}>
                <input value={inputQuery} placeholder="City,State,Country" onChange={e => setInputQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>

            {isLoading ? (
                <Spinner />
            ) : (
                    <div css={weatherdisplay}><WeatherCard weatherdata={forecast}/></div>
                
            )}
            {error && <ErrorContainer>Error!</ErrorContainer>}

            <Footer />

        </div>
    );
}

export default ForecastWeek;
