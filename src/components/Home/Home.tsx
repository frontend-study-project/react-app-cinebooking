import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useQuery } from "@tanstack/react-query";
import { movieFetcher } from "../../utils/http";

const api_key = import.meta.env.VITE_API_KEY;

// 아~~ 그렇긴 할 거 같아 ㅠ 지금 진도랑 프로젝트랑 안 맞아서
// 앗 ㅋㅋ 알아두면 좋긴한데 사실 지금 당장은 몰라도 될거 같아 나도 잘 안쓰기도 하고
// 어던 사람은 차라리 useMemo 안쓰는게 더 좋다고도 하구 강의라서 일단은 다 알려주나보다
// 아진짜?ㅋㅋㅋㅋㅋ 그런가바 ㅜㅜ  그래서일단은듣는중 암튼. 이제 api호출하기 해볼게욤 근데 진짜 다써놓으셨다 ㅋㅋㅋㅋㅋ웅 할라고보니까 다해놓으셨네
// 응응!! 정인씨?? 경쟁심 생기네 나도

const Home = () => {
  const { data } = useQuery({
    queryKey: ["movie"],
    queryFn: movieFetcher,
  });

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (!data?.results) return;
    setMovie(data?.results.slice(0, 4).map((movie) => ({ ...movie })));
  }, [data?.results]);
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
