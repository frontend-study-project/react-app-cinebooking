import { Link } from 'react-router-dom';
import { useUpcomingMoviesQuery } from '../../hooks/useMovie';
import Skeleton from './Skeleton';

const HomeKeyVisual = () => {
  const { data: upcomingData } = useUpcomingMoviesQuery();
  console.log(upcomingData);

  if (!upcomingData) return <Skeleton />;

  return (
    <div className="key-visual">
      {upcomingData?.results?.slice(0, 1).map((it) => (
        <div className="kv-inner" key={it.id}>
          <div className="kv-img">
            <img
              src={`https://image.tmdb.org/t/p/original/${it.backdrop_path}.jpg%22`}
              alt={it.original_title}
            />
          </div>
          <div className="kv-info mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-zinc-100">
            <strong className="kv-title text-5xl">{it.original_title}</strong>
            <div className="text-ellipsis mt-4">
              <p className="kv-detail text-zinc-200">{it.overview}</p>
            </div>
            <Link to={`/movie-detail/${it.id}`} className="btn-kv-more">
              상세보기
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HomeKeyVisual;
