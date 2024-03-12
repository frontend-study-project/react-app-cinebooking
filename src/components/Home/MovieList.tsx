import {
  usePopularMoviesQuery,
  useUpcomingMoviesQuery,
} from '../../hooks/useMovie';
import { useEffect, useState } from 'react';
import MovieListDetail from './MovieListDetail';
import { Movies } from '../../types';

enum MovieType {
  POPULAR = 'popular',
  UPCOMING = 'upcoming',
}

const MovieList = () => {
  const [movieType, setMovieType] = useState(MovieType.POPULAR);

  const [movieList, setMovieList] = useState<Movies[]>([]);

  const { data: popularMovieData } = usePopularMoviesQuery();
  const { data: upcomingMovieData } = useUpcomingMoviesQuery();

  useEffect(() => {
    setMovieList(
      (movieType === MovieType.POPULAR ? popularMovieData : upcomingMovieData)
        ?.results || []
    );
  }, [movieType, popularMovieData, upcomingMovieData]);

  if (!popularMovieData) return;

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <h2 className="text-2xl pt-10 pb-5 text-zinc-500 flex gap-10 font-normal">
        <button
          className={`btn_movie_type ${
            movieType === MovieType.POPULAR ? 'on text-zinc-800' : ''
          }`}
          onClick={() => setMovieType(MovieType.POPULAR)}
        >
          인기순
        </button>
        <button
          className={`btn_movie_type ${
            movieType === MovieType.UPCOMING ? 'on text-zinc-800' : ''
          }`}
          onClick={() => setMovieType(MovieType.UPCOMING)}
        >
          상영 예정작
        </button>
      </h2>

      <MovieListDetail movieList={movieList} />
    </div>
  );
};
export default MovieList;
