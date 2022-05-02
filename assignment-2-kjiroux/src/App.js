import React  from 'react';
import { Routes, Route, Link, NavLink, useParams, Outlet } from 'react-router-dom';

import './App.css';
import peopledata from './data/people.json'
import planetdata from './data/planets.json'
import filmdata from './data/films.json'




// Navbar ------------------------------------
function DisplayNavbar() {
    return (
        <div className="navbar">
            <div className="navhome"><h1><Link to="/">Star Wars</Link></h1></div>
            <div className="navoptions" ><h1><NavLink to="/people">People</NavLink></h1></div>
            <div className="navoptions" ><h1><NavLink to="/planets">Planets</NavLink></h1></div>
            <div className="navoptions" ><h1><NavLink to="/films">Films</NavLink></h1></div>
        </div>    
    )   
}

// Routes ------------------------------------
function Home() {
    return (
        <div className="interface">

            <DisplayNavbar />
            <div className="datapage">
                <div className="homepage">
                </div>
            </div>
        </div>
    );
}

function People() {

    //Object.keys(peopledata).map(key => {
        //console.log(`value for key is ${key}:`, peopleData[key])
    //})

    return (
        <div className="interface">

            <DisplayNavbar />
            <div className="datapage">
                <div className="sidebar">
                    <ul>
                        {Object.entries(peopledata).map(([key, value]) => (
                            <li className="sideoptions" key={key}><NavLink to={key}>{value.name}</NavLink></li>
                            ))}
                    </ul>
                </div>
                <Outlet />
            </div>
        </div>
    );
}

function Planets() {
    return (
        <div className="interface">

            <DisplayNavbar />
            <div className="datapage">
                <div className="sidebar">
                    <ul>
                        {Object.entries(planetdata).map(([key, value]) => (
                            <li className="sideoptions" key={key}><NavLink to={key}>{value.name}</NavLink></li>
                        ))}
                    </ul>
                </div>
                <Outlet />
            </div>
        </div>
    );
}

function Films() {
    return (
        <div className="interface">

            <DisplayNavbar />
            <div className="datapage">
                <div className="sidebar">
                    <ul>
                        {Object.entries(filmdata).map(([key, value]) => (
                            <li className="sideoptions" key={key}><NavLink to={key}>{value.title}</NavLink></li>
                        ))}
                    </ul>
                </div>
                <Outlet />
            </div>
        </div>
    );
}

function NotFound() {
    return (
    <div className="interface">

        <DisplayNavbar />
        <div className="datapage" >
            <h1 className="notfound">This is not the page you are looking for.</h1>
            <img className="notfound" src="https://i.kym-cdn.com/entries/icons/facebook/000/018/682/obi-wan.jpg" alt="This is not the page you are looking for" />
        </div>
    </div>
    );
}

// Data Page ---------------------------------
function DisplayPerson() {

    const params = useParams()
    //console.log("--- params: ", params)
    var person = peopledata[params.person]
    console.log("--- Person: ", person)

    var len = Object.keys(planetdata).length
    var homeworld = ''

    for (let i = 1; i < len + 1; i++) {
        if (planetdata[i]['url'] === person.homeworld) {
            //console.log("Found planet. ")
            homeworld = planetdata[i]['name']
        }
    }

    return (
            <div className="card">
                <h1>{person.name}</h1>
                <h3>{"Height: " + person.height}</h3>
                <h3>{"Mass: " + person.mass}</h3>
                <h3>{"Hair Color: " + person.hair_color}</h3>
                <h3>{"Skin Color: " + person.skin_color}</h3>
                <h3>{"Eye Color: " + person.eye_color}</h3>
                <h3>{"Birth Year: " + person.birth_year}</h3>
                <h3>{"Gender: " + person.gender}</h3>
            <h3>Homeworld: <Link to={person.homeworld}>{homeworld}</Link></h3>
                <h3>{"Films: "}</h3>
                
                <GenerateFilms data={person.films} />
            </div>
    )

}

function DisplayPlanet() {

    const params = useParams()
    //console.log("--- params: ", params)
    var planet = planetdata[params.planet]
    console.log("--- Planet: ", planet)

    return (
        <div>
            <div className="planetcard">
                <h1>{planet.name}</h1>
                <h3>{"Rotation Period: " + planet.rotation_period}</h3>
                <h3>{"Orbital Period: " + planet.orbital_period}</h3>
                <h3>{"Diameter: " + planet.diameter}</h3>
                <h3>{"Climate: " + planet.climate}</h3>
                <h3>{"Gravity: " + planet.gravity}</h3>
                <h3>{"Terrain: " + planet.terrain}</h3>
                <h3>{"Surface Water: " + planet.surface_water}</h3>
                </div>
            <div className="planetcard">
                <h1 className="hide">{planet.name}</h1>
                <h3>{"Population: " + planet.population}</h3>
                <h3>{"Characters:"}</h3>
                <GeneratePeople data={planet.residents} />
                <h3>{"Films: "}</h3>
                <GenerateFilms data={planet.films} />
            </div>
        </div>
    )

}

function DisplayFilm() {

    const params = useParams()
    //console.log("--- params: ", params)
    var film = filmdata[params.film]
    console.log("--- Film: ", film)

    return (
        <div>

            <div>
                <div className="starwarscard">
                    <div className="fade"> </div>
                    <div className="starwars">
                        <div className="crawl">
                            <div className="title">
                                <h3>{"Episode " + film.episode_id}</h3>
                                <h1>{film.title}</h1>
                            </div>
                            <p className="opcrawl">{film.opening_crawl}</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h1>Episode {film.episode_id}: {film.title}</h1>
                    <h3>{"Main Characters: "}</h3>
                    <GeneratePeople data={film.characters} />
                    <h3>{"Planets Featured in the Film: "}</h3>
                    <GeneratePlanets data={film.planets} />
                </div>
                <div className="card">
                    <h3>{"Director: " + film.director}</h3>
                    <h3>{"Producer: " + film.producer}</h3>
                    <h3>{"Release Date: " + film.release_date}</h3>
                </div>
            </div>
        </div>
    )
}

// Generate Lists ----------------------------
function GeneratePeople(props) {

    var people = props.data
    var saved = []

    if (people.length === 0) {
        return (
            <div>
                <ul>
                    <li>None</li>
                </ul>
            </div>
        )
    }
    else {
        var len = Object.keys(peopledata).length;
        let i = 0
        let j = 1
        for (i = 0; i < people.length; i++) {

            //console.log("-- current person being checked: ", people[i])
            for (j = 1; j <= 16; j++) {

                //console.log("-- current person being compared: ", peopledata[j]['url'])
                if (people[i] === peopledata[j]['url']) {
                    //console.log(peopledata[j]['url'])
                    //console.log("HIT")
                    saved.push(peopledata[j])
                }
            }
            // Object.entries is just not working man why T_T
            // I'm just gonna split it. I know where the break is.
            for (j = 18; j < len + 1; j++) {

                //console.log("-- current person being compared: ", peopledata[j]['url'])
                if (people[i] === peopledata[j]['url']) {
                    //console.log(peopledata[j]['url'])
                    //console.log("HIT")
                    saved.push(peopledata[j])
                }
            }
        }
        //console.log("--- saved: ", saved)
        return (
            <div className="wraplist">
                <ul>
                    {Object.entries(saved).map(([key, value]) => (
                        <li key={key}><Link to={value.url}>{value.name}</Link></li>
                    ))}
                </ul>
            </div>
        )
    }
}

function GeneratePlanets(props) {

    var planets = props.data
    var saved = [] 
    if (planets.length === 0) {
        return (
            <div>
                <ul>

                    <li>None</li>

                </ul>
            </div>
        )
    }
    else {

        var len = Object.keys(planetdata).length;

        for (let i = 0; i < planets.length + 1; i++) {
            //console.log("-- current planet being checked: ", planets[i])
            for (let j = 1; j < len + 1; j++) {
                //console.log("-- current planet being compared: ", planetdata[j])
                if (planets[i] === planetdata[j]['url']) {
                    //console.log("HIT")
                    saved.push(planetdata[j])
                }

            }

        }
        //console.log("--- saved: ", saved)

        return (
            <div className="wraplist">
                <ul>
                    {Object.entries(saved).map(([key, value]) => (
                        <li key={key}><Link to={value.url}>{value.name}</Link></li>
                    ))}
                </ul>
            </div>
        )
    }

}

function GenerateFilms(props) {

    var films = props.data
    var saved = []

    //console.log("---films: ", films)
    //console.log(filmdata)

    if (films.length === 0) {
        return (
            <div>
                <ul>

                    <li>None</li>

                </ul>
            </div>
        )
    }
    else {

        var len = Object.keys(filmdata).length;

        for (let i = 0; i < films.length; i++) {
            //console.log("-- current film being checked: ", films[i])
            for (let j = 1; j < len + 1; j++) {
                //console.log("-- current film being compared: ", filmdata[j])
                if (films[i] === filmdata[j]['url']) {
                    //console.log("HIT")
                    saved.push(filmdata[j])
                }
                    
            }
            
        }
        //console.log("--- saved: ", saved)

        return (
            <div>
                <ul>
                    {Object.entries(saved).map(([key, value]) => (
                        <li key={key}><Link to={value.url}>{value.title}</Link></li>
                    ))}
                </ul>
            </div>
        )
    }

}

// App ---------------------------------------


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} >
                <Route path="/people/:person" element={<DisplayPerson />} />
            </Route>
            <Route path="/planets" element={<Planets />} >
                {<Route path="/planets/:planet" element={<DisplayPlanet />} />}
            </Route>
            <Route path="/films" element={<Films />} >
                {<Route path="/films/:film" element={<DisplayFilm />} />}
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )

}


export default App;
