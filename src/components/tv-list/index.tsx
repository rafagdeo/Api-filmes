'use client';
import axios from "axios";
import { useEffect, useState } from "react"
import Card from "../tv-list"
import { Tv } from "@/types/tv"

export default function tvList() {
    const [tvs, setTvs] = useState<Tv[]>([])
    useEffect(() => {
        getTvs();
    }, [])

    const getTvs = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/tv',
            params: {
            api_key: 'be6bb51e92e63e72f02dda96a3658dee',
            language: 'pt-BR'
            }
        }).then(response => {
            setTvs(response.data.results)
        })
    }

    return (
        <div className="tv-list grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-8 pb-8">
            {tvs.map((tv) =>
                <Card
                    key={tv.id}
                    tv={tv}
                />
            )}
        </div>
    )
}