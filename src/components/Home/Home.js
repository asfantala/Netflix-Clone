import React, { useState, useEffect } from 'react'
import MovieList from '../MovieList/MovieList.js'
function Home() {
    const [moviesArr, setMoviesArr] = useState([]);
    const sendReq = async () => {
        const serverURL = `https://movies-library-coral.vercel.app/trending`;
        const response = await fetch(serverURL);
        const data = await response.json();
        setMoviesArr(data);
    }

    useEffect(() => {
        sendReq();
    })
    return (
        <div className="home">
            < MovieList movies={moviesArr} />



        </div>
    )
}

export default Home;