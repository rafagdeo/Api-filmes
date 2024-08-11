import { Tv } from "@/types/tv"
import StarRating from "../star-rating"

export interface Props {
    tv: Tv
}

export default function Card(props: Props) {
    const tv = props.tv
    return (
        <div className="">
            <div className="">
                <img className="pb-3 bg-cover hover:opacity-60" src={`https://image.tmdb.org/t/p/original${tv.poster_path}`} alt="{tv.title}" />
            </div>
            <div className="text-base font-bold pb-3">
                {tv.title}
                <StarRating 
                    rating={tv.vote_average}
                />
            </div>
            <div className="text-sm">
                {tv.overview.length > 100 
                ? `${tv.overview.substring (0, 100)}...` : tv.overview}
                <button className="">Veja mais</button>
            </div>
            <p>
                {tv.vote_average}
            </p>
        </div>
    )
}