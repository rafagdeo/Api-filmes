import { Movie } from "@/types/movie"
import StarRating from "../star-rating"

export interface Props {
    movie: Movie
}

export default function card(props: Props) {
    const movie = props.movie
    return (
        <div className="">
            <div className="">
                <img className="pb-3 bg-cover hover:opacity-60 rounded-md" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="{movie.title}" />
            </div>
            <div className="text-base font-bold pb-3">
                {movie.title}
                <StarRating 
                    rating={movie.vote_average}
                />
            </div>
            <div className="text-sm">
                {movie.overview.length > 100 
                ? `${movie.overview.substring (0, 100)}... ` : movie.overview}
                <button className="font-bold hover:text-yellow-300"> Veja mais</button>
            </div>
        </div>
    )
}