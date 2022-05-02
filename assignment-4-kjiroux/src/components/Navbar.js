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

import React from 'react';

import { css } from '@emotion/react'
import styled from '@emotion/styled/macro';



const Title = styled.div`
	font-weight: 700;
    text-shadow: 5px 5px 0px    #35E2C3,
                  10px 10px 0px #14D0F0,
                  15px 15px 0px #7F73FF,
                  20px 20px 0px #FF83C3,
                  25px 25px 0px #FFE552;

    width: 30%;
    margin-left: auto;
    margin-right: auto;
    display: flex;


    h1 {
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        font-family: 'Pacifico', cursive;
        font-size: 64px;
        width: 100%;
        color: #FFE9EC;
    };
`;

const strip = css`
    width: 100%;
    height: 2em;
    background-color: #FF83C3;
    display: flex;

`;

// css text effect edited from https://codepen.io/TajShireen/pen/abzmoRE
const header = css`
    width: 100%;
    height: 12em;
    padding: 1px 0 1px 0;
    display: flex;

    background: repeating-linear-gradient(
        to right,
        #f8c7dd,
        #f8c7dd 10px,
        #fbd6e8 10px,
        #fbd6e8 20px
    );



`;

const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
`;


function Navbar() {

    return (
        <Container>
            <div css={header}>
                <Title>
                    <h1>The Candy Shoppe</h1>
                </Title>
            </div>
            <div css={strip}>
            </div>
        </Container>

        )
}

export default Navbar;