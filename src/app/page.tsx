import MovieList from "@/components/movie-list";
import Slide from "@/components/slide";

export default function Home() {
  return (
    <section>
      <Slide />
      <h2 className="m-10 font-bold text-4xl text-center">Catálogo de filmes</h2>
        <MovieList />
    </section>
  );
}
