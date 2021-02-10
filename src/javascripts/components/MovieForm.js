import React from 'react'
import { MovieContext } from './MovieList'

export default function MovieForm() {
    let {movies, setMovie} = useContext(MovieContext)
    return (
        <p>{movies.length}</p>
    )
}