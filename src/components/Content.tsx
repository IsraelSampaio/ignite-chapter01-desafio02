import { MovieProps } from "@/interfaces/Movie.interface";
import { GenreResponseProps } from "@/interfaces/Genre.interface";

import { MovieCard } from "./MovieCard";

import "@/styles/content.scss";

type ContentProps = {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
};

export function Content({ movies, selectedGenre }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
