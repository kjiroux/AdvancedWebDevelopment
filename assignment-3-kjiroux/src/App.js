import React from 'react';
import { Routes, Route, Navigate, useSearchParams } from 'react-router-dom';

import ForecastWeek from './pages/ForecastWeek';


import './App.css';

function App() {
    const [ searchParams ] = useSearchParams()
    return (
        <Routes>
            <Route
                path="/"
                element={<ForecastWeek query={searchParams.get("q")} />}
            />
        </Routes>
    );
}

export default App;