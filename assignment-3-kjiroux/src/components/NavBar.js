/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { css } from '@emotion/react'
import styled from '@emotion/styled/macro';

/* Color Palette 3

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

const Title = styled.h1`

    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    font-family: 'Pacifico', cursive;
    color: #E7E7DE;
    text-shadow: 3px 3px 10px #2E279D;
    font-size: 64px;



`;

const SpecialLink = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap');
    font-family: 'Montserrat', sans-serif;
    border: 1px solid rgba(77, 128, 228, .3);
    color: white;
    font-size: 24px;
    width: 100px;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    line-height: 60px;
    padding: 0 30px 0 30px;

`;

const speclinks = css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #2E279D;
    height: 60px;

    @media (max-width: ${breakpoints.sm}px) {
        height: 30px;
        justify-content: flex-start;
        ${SpecialLink} {
            font-size: 16px;
            line-height: 30px;
        };
    }

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {
        justify-content: space-evenly;
        height: 40px;
        ${SpecialLink} {
            font-size: 20px;
            line-height: 40px;
        };
    }

`;

const navbar = css`

    height: 6.5em;
    align-content: center;
    top: 0; 
    margin: 0;
    padding: 0 0 30px 0;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    

    img {
        display: block;
        width: 150px;
        height: 150px;
        padding: 0px 30px 0px 30px;
        object-fit: cover;

    };

    ${Title} {
        margin-left: auto;
        margin-right: auto;
        align: center;


    };


    @media (max-width: ${breakpoints.sm}px) {
        align-content: left;
        height: 2.5em;

        ${Title} {
            font-size: 25px;

        };

        img {
            display: block;
            width: 50px;
            height: 50px;
            padding: 10px 3px 0px 3px;

        };

    }

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {
        ${Title} {
            font-size: 37px;

        };

        img {
            display: block;
            width: 100px;
            height: 100px;
            padding: 0px 3px 0px 3px;


        };
    }


`;

function NavBar() {

    return (
        <div >
            
            <div css={navbar}>
                <img src='http://openweathermap.org/img/w/01d.png' />
                <img src='http://openweathermap.org/img/w/01d.png' />
                <img src='http://openweathermap.org/img/w/01d.png' />
                <Title>Weatherman</Title>
                <img src='http://openweathermap.org/img/w/01d.png' />
                <img src='http://openweathermap.org/img/w/01d.png' />
                <img src='http://openweathermap.org/img/w/01d.png' />
                
            </div>
            <div css={speclinks}>
                <SpecialLink>Today</SpecialLink>
                <SpecialLink>Hourly</SpecialLink>
                <SpecialLink>10 Day</SpecialLink>
                <SpecialLink>Weekend</SpecialLink>

            </div>
            {/*
            <div css={navbar}>
                <div><h1><Link to="/">Home</Link></h1></div>
                <div><h1><NavLink to="/currentweather">Current Weather</NavLink></h1></div>
                <div><h1><NavLink to="/forecastweek">Week Forecast</NavLink></h1></div>
            </div>
            */}
        </div>
    )
}

export default NavBar;