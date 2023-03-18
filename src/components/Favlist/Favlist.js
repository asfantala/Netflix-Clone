import React, { useEffect, useState } from 'react';
import FavMov from './Favoritemovie';

export default function FavList() {
    const [moviesArr, setMoviesArr] = useState([]);

    const sendReq = async () => {
        const serverURL = `https://movies-library-coral.vercel.app/getMovies`;
        const response = await fetch(serverURL);
        const data = await response.json();
        setMoviesArr(data);
    }
    const takeNewArr = (arr) => {
        setMoviesArr(arr);
    }

    useEffect(() => {
        sendReq();
    }, [])

    return (
        <div>


            <FavMov  takeNewArr={takeNewArr} res={moviesArr}/>



        </div>
    )
}