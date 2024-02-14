import { useEffect, useState } from "react";
import { useNowPlayingMoviesQuery } from "../../hooks/useMovie";
import { Movies } from "../../types";

const Home = () => {
  const [movie, setMovie] = useState<Movies[]>([]);

  const { data } = useNowPlayingMoviesQuery();

  useEffect(() => {
    if (!data) return;
    setMovie(data?.results.slice(0, 4).map((movie) => ({ ...movie })));
  }, [data]);
  // 리액트에서는 깊은 복사를 한 뒤 넣어주기

  return (
    <>
      <h2 className="mt-28 text-2xl font-bold py-2 text-zinc-600">
        현재 상영작
      </h2>
      <div className="flex gap-5 text-center">
        {movie.map((it) => (
          <div className="movie" key={it.id}>
            <div className="group relative">
              <img
                src={`https://image.tmdb.org/t/p/w300/${it.poster_path}`}
                alt=""
              />
              <div className="detail-btns absolute z-10 top-0 left-0 w-full h-full hidden group-hover:flex flex-col justify-center items-center before:block before:w-full before:h-full before:absolute bg-stone-600/60">
                <a
                  href=""
                  className="relative z-10 py-3 px-5 rounded-lg bg-pink-300"
                >
                  예매하기
                </a>
                <a
                  href=""
                  className="relative z-10 py-3 px-5  mt-1.5 rounded-lg bg-pink-50"
                >
                  상세보기
                </a>
              </div>
            </div>
            <div className="detail">
              <strong className="movie-title block pt-3.5">
                {it.original_title}
              </strong>
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
