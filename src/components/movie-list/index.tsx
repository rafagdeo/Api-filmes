'use client';
import axios from "axios";
import { useEffect, useState } from "react"
import Card from "../movie-card";
import { Movie } from "@/types/movie";

export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([])
    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
            api_key: 'be6bb51e92e63e72f02dda96a3658dee',
            language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results)
        })
    }

    return (
        <div className="movie-list grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-8 pb-8">
            {movies.map((movie) =>
                <Card
                    key={movie.id}
                    movie={movie}
                />
            )}
        </div>
    )
}