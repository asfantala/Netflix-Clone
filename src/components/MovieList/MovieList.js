import React from 'react'
import Movie from '../Movie/Movie'
import Row from 'react-bootstrap/Row';

import './MovieList.css'
export default function MovieList(props) {
    return (
        <div key= {props.id} className='movielist'>
            {props.movies.map((item) => {
                return (
                    
                    <Row>

                        <Movie key={item.id} movielist={item} />
                    </Row>
                )
            })}
        </div>
    )

}