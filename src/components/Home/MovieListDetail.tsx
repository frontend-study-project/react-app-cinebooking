import { Link } from 'react-router-dom';
import { Movies } from '../../types';

const MovieListDetail = ({ movieList }: { movieList: Movies[] }) => {
  return (
    <div className="flex gap-5 text-center">
      {movieList.slice(0, 5).map((it) => (
        <div className="movie" key={it.id}>
          <div className="group relative rounded-2xl overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w300/${it.poster_path}`}
              alt={it.original_title}
            />
            <div className="detail-btns absolute z-10 top-0 left-0 w-full h-full hidden group-hover:flex flex-col justify-center items-center before:block before:w-full before:h-full before:absolute bg-stone-600/60">
              <a
                href=""
                className="relative z-10 py-3 px-5 rounded-lg bg-pink-300"
              >
                예매하기
              </a>
              <Link
                to={`/movie-detail/${it.id}`}
                className="relative z-10 py-3 px-5  mt-1.5 rounded-lg bg-pink-50"
              >
                상세보기
              </Link>
            </div>
          </div>
          <div className="detail">
            <strong className="movie-title block pt-3.5">
              {it.original_title}
            </strong>
            <span className="release-date">{it.release_date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieListDetail;
