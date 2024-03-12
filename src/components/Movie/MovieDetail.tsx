import { useNavigate, useParams } from 'react-router-dom';
import { useMovieDetailsQuery } from '../../hooks/useMovie';

const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: movieDetailData } = useMovieDetailsQuery(Number(id));

  if (!id) {
    navigate(-1);
    return;
  }

  if (!movieDetailData) return null;

  return (
    <div className="movie-detail mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-10">
      <section className="movie-detail-inner flex gap-10 items-center text-lg">
        <div className="movie-poster rounded-3xl overflow-hidden w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetailData.poster_path}`}
            alt=""
          />
        </div>

        <div className="movie-detail-info w-2/4">
          <strong className="block text-3xl mb-3">
            {movieDetailData.title}
          </strong>
          <p className="text-xl">
            개봉일 <strong>{movieDetailData.release_date}</strong>
          </p>
          <p className="text-xl">
            평점{' '}
            <strong className="text-pink-400 text-2xl">
              {Number(movieDetailData.vote_average).toFixed(1)}
            </strong>
          </p>
          <p className="mt-16 mb-28">{movieDetailData.overview}</p>
          <button className="bg-pink-400 text-zinc-50 py-2.5 px-10 rounded-full text-xl">
            예매하기
          </button>
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;
