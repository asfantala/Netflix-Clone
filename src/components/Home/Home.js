import React, { useState, useEffect } from 'react'
import MovieList from '../MovieList/MovieList.js'
function Home() {
    const [moviesArr, setMoviesArr] = useState([]);
    const sendReq = async () => {
        const serverURL = `[::1]:3004/trending`;
        const response = await fetch(serverURL);
        const data = await response.json();
        setMoviesArr(data);
    }

    useEffect(() => {
        sendReq();
    })
    return (
        <>
            <MovieList movies={moviesArr} />



        </>
    )
}

export default Home;