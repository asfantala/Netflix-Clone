import React from 'react'
import Movie from '../Movie/Movie'
export default function MovieList(props) {
    return (
        <div className='movielist'>
            {props.movies.map((item) => {
                return (
                    <div>
                        <Movie movielist={item} />
                    </div>
                )
            })}
        </div>
    )

}