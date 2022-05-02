/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import styled from '@emotion/styled/macro';



/* Color Palette 3

    #E7E7DE rgb(231, 231, 222)

    #DFF6F0 rgb(223, 246, 240)
    #46B3E6 rgb(70, 179, 230)
    #4D80E4 rgb(77, 128, 228)
    #2E279D rgb(46, 39, 157)

 */

const breakpoints = {
    sm: 640,
    lg: 1024
};

const displays = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: ${breakpoints.sm}px){
        justify-content: space-evenly;
    }

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {
        justify-content: center;
    }


`;

const card = css`
    display: inline-block;
   
    background-image: radial-gradient( #DFF6F0 30%, #46B3E6);
    padding: 10px;
    margin: 10px;
    width: 200px;
    height: 390px;
    border-radius: 30px;
    border: 3px solid #2E279D;
    box-shadow: 6px 6px 10px #2E279D;

    @media (max-width: ${breakpoints.sm}px) {
        width: 500px;
        height: 100px;
        display: inline-block;
        padding: 3px;
        border: 2px solid #2E279D;
        border-radius: 10px;
    }


`;

const Location = styled.h1`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap');
    font-family: 'Montserrat', sans-serif;



    color: #E7E7DE;
    margin-left: auto;
    margin-right: auto;
    width: 25%;
    text-shadow: 3px 3px 10px #2E279D;
    font-size: 48px;

    padding-left: 8%;

    @media (max-width: ${breakpoints.sm}px) {
        width: 27%;
        text-align: left;
        font-size: 25px;
        padding: 0 0 0 3px;
    }

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {
        width: 36%;
        text-align: center;
        font-size: 37px;
        padding-left: 0;
    }

`;

const NotFound = styled.h1`

    color: #E7E7DE;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    font-size: 48px;

    @media (max-width: ${breakpoints.sm}px) {
        width: 27%;
        text-align: left;
        font-size: 25px;
        padding: 0 0 0 3px;
    }

`;

const TheDate = styled.h2`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap');
    color: #E7E7DE;
    text-shadow: 3px 3px 10px #2E279D;
    text-align: center;
    font-size: 20px;
    font-variant: small-caps;
    font-family: 'Montserrat', sans-serif;
    text-decoration: underline;
    width: auto;

    @media (max-width: ${breakpoints.sm}px) {
        width: 26%;
        color: darkblue;
        text-shadow: none;
        text-align: left;
        font-size: 16px;
        padding: 0 0 0 3px;
    }

`;

const Precip = styled.h4`
    color: darkdimgray;
`;

const Temperature = styled.h3`
    color: darkdimgray;
`;

const Description = styled.h4`
    color: darkdimgray;
`;

const temp = css`
    height: 20%;
    width: 99%;

    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 40%;
        background-image: radial-gradient( #DFF6F0 30%, #46B3E6);
        border: 2px solid #2E279D;
        border-radius: 10px;
        float: left;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    };

    ${Temperature} {
        font-size: 30px;
        float: right;
        color: darkblue;
        text-shadow: 2px 2px 3px #E7E7DE;

    };

    @media (max-width: ${breakpoints.sm}px) {
        width: 25%;
        display: inline-block;

        img{
            background-image: none;
            border: none;
            box-shadow: none;
        };

        ${Temperature} {
            font-size: 20px;
            float: left;
            color: darkblue;
            padding: 0px 0px 0px 5px;
            margin: 10px 0 0 0;
        };

    }

`;

const desc = css`

    margin: 10px 0px 5px 0px;
    padding: 0px 10px 15px 0px;
    width: auto;
    



    @media (max-width: ${breakpoints.sm}px) {

        position: relative;
        margin: 0;
        padding: 0;
        top: -50px;
        display: inline-block;


        width: 71%;
        float: right;

        h3 {
            font-size: 15px;
            float: left;
            color: black;
            padding: 0px 0px 0px 10px;
            display: inline-block;
        };

        ${Description} {


        };

        ${Temperature} {
            font-size: 15px;
            margin: 0 0 3px 0;
            display: inline-block;
    
        };


        ${Precip} {
            display: inline-block;
            float: right;
            padding: 0 3px 0 0;
            font-size: 15px;
            
        };

    }

`;


function WeatherCard(props) {

    const data = props.weatherdata;
    const weekweather = props.weatherdata.list;

    //console.log(data)
    //console.log(weekweather)

    if (weekweather === undefined) {
        return (
            <div><NotFound>No information to display. Please enter a city!</NotFound></div>
            )
    }
    else {

        return (
            <div>
                <Location>{data.city.name}, {data.city.country}</Location>
                <div css={displays}>
                    
                    {weekweather.slice(0, 7).map((repo, index) =>
                    <div css={card} key={repo.dt}>
                            <TheDate>{(new Date(repo.dt * 1000)).toDateString()}</TheDate>

                            <div css={temp}>
                                <img src={`http://openweathermap.org/img/w/${repo.weather[0].icon}.png`} />
                                <Temperature>{repo.temp.day} F</Temperature>
                            </div>

                            <div css={desc} >
                                <h3>Weather: {repo.weather[0].main}</h3>
                                <Description>-- {repo.weather[0].description}</Description>
                                <Temperature>High: {repo.temp.max} F</Temperature>
                                <Temperature>Low : {repo.temp.min} F</Temperature>
                                <Precip>Precipitation: {repo.rain ? repo.rain : 0} mm</Precip>
                            </div>

                    </div>  
                )}
                
                </div>
            </div>
        )
    }



}

export default WeatherCard;