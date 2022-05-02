/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { css } from '@emotion/react'
import styled from '@emotion/styled/macro';



/*  Color Palette 1

    #F9F8EB rgb(249, 248, 235)
    #A7D7C5 rgb(167, 215, 197)
    #74B49B rgb(116, 180, 155)
    #5C8D89 rgb(92, 141, 137)

 */

/* Color Palette 2
 
    #CFFFDC rgb(207, 255, 220)
    #93FFD8 rgb(147, 255, 216)
    #548CFF rgb(84, 140, 255)
    #7900FF rgb(121, 0, 255)
 
 */

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

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap');
    font-family: 'Montserrat', sans-serif;
    color: #E7E7DE;
    margin-left: auto;
    margin-right: auto;
    text-shadow: 3px 3px 10px #2E279D;
    font-size: 24px;

    font-variant: small-caps;


`;

const footer = css`

    bottom: 0;
    width: 100%;
    height: 2.5em;
    margin-left: auto;
    margin-right: auto;
    align-content: center;
    display: flex;
    justify-content: space-evenly;

    ${Title} {
        padding-top: 40px;
        text-align: center;

    };

    img {
        display: block;
        width: 150px;
        height: 150px;
        padding: 0px 30px 0px 30px;
        object-fit: cover;

    };


    @media (max-width: ${breakpoints.sm}px) {
        ${Title} {
            font-size: 12px;
            padding-top: 20px;
            text-align: center;

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
            font-size: 16px;
            text-align: center;
            padding-top: 30px;


        };

        img {
            display: block;
            width: 100px;
            height: 100px;
            padding: 0px 3px 0px 3px;


        };
    }


`;


function Footer() {

    return (
        <div css={footer}>
            <img src='http://openweathermap.org/img/w/03d.png' />
            <div><Title>Weathermen are often wrong. Please confirm the Weather by stepping outside.</Title></div>
            <img src='http://openweathermap.org/img/w/03d.png' />
        </div>
    )
}

export default Footer;