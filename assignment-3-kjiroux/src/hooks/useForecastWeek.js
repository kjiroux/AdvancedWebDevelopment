import React, { useState, useEffect } from 'react';

function useForecastWeek(query) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const appid = '212a5fd21b56b295f0beac30b895336c';
    const cnt = 16;

    useEffect(() => {
        let ignore = false;
        const controller = new AbortController();
        async function fetchSearchResults() {
            let responseBody = {};
            setLoading(true);
            try {
                const response = await fetch(
                    `http://api.openweathermap.org/data/2.5/forecast/daily?q=${query}&units=imperial&cnt=${cnt}&appid=${appid}`,
                    { signal: controller.signal }
                );
                responseBody = await response.json();
            } catch (e) {
                if (e instanceof DOMException) {
                    console.log("== HTTP request cancelled")
                } else {
                    setError(true);
                    throw e;
                }
            }
            if (!ignore) {
                setLoading(false);
                setError(false);
                setRepos(responseBody || []);
            }
        }
        if (query) {
            fetchSearchResults()
        }
        return () => {
            controller.abort();
            ignore = true;
        }
    }, [query]);

    //console.log(repos)
    //console.log(repos.list)

    return [repos, loading, error];
}

export default useForecastWeek;