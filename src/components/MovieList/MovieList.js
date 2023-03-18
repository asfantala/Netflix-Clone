import React from 'react'
import Movie from '../Movie/Movie'
export default function MovieList(props) {
    return (
        <div key= {props.id} className='movielist'>
            {props.movies.map((item) => {
                return (
                    <div>
                        <Movie key={item.id} movielist={item} />
                    </div>
                )
            })}
        </div>
    )

}