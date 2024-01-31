import { useEffect, useState } from "react";
import { useNowPlayingMoviesQuery } from "../../hooks/useMovie";
import { Movies } from "../../types";

const Home = () => {
  const [movie, setMovie] = useState<Movies[]>([]);

  const { data } = useNowPlayingMoviesQuery();

  useEffect(() => {
    if (!data) return;
    setMovie(data?.slice(0, 4).map((movie) => ({ ...movie })));
  }, [data]);
  // 리액트에서는 깊은 복사를 한 뒤 넣어주기

  console.log(movie);

  return (
    <>
      <h2 className="mt-10 text-2xl font-bold">HOME</h2>
      <div className="flex">
        {movie.map((it) => (
          <div className="movie group relative" key={it.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${it.poster_path}`}
              alt=""
            />
            <div className="detail-btns absolute z-10 top-0 left-0 w-full h-full hidden group-hover:flex flex-col justify-center items-center before:block before:w-full before:h-full before:absolute">
              <a href="" className="relative z-10">
                예매하기
              </a>
              <a href="" className="relative z-10">
                상세보기
              </a>
            </div>
            <div className="detail absolute top-full left-0 w-full">
              <strong className="movie-title">{it.original_title}</strong>
              <span className="release-date">{it.release_date}</span>
              <span className="movie-ranked"></span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
