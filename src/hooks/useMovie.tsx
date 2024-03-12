import { useQuery } from '@tanstack/react-query';
import {
  getMovieDetails,
  getNowPlayingMovies,
  getPopularMovies,
  getUpcomingMovies,
} from '../utils/http';
import { Movies } from '../types';

// api를 호출하는 역할
export const useNowPlayingMoviesQuery = () => {
  return useQuery<{ results: Movies[] }>({
    queryKey: ['movie', 'nowPlayingMovie'],
    queryFn: getNowPlayingMovies,
  });
};
export const usePopularMoviesQuery = () => {
  return useQuery<{ results: Movies[] }>({
    queryKey: ['movie', 'popularMovie'],
    queryFn: getPopularMovies,
  });
};
export const useUpcomingMoviesQuery = () => {
  return useQuery<{ results: Movies[] }>({
    queryKey: ['movie', 'upcomingMovie'],
    queryFn: getUpcomingMovies,
  });
};

export const useMovieDetailsQuery = (id: number) => {
  return useQuery({
    queryKey: ['movie', 'detail', id],
    queryFn: () => getMovieDetails(id),
  });
};

// store: 상태의 값을 저장하는 공간(slice를 포함)
// slice: 비슷한 것을 모아둔 상태들
// hook: react에서 사용하는 개념으로, 자주 사용하는 기능들(사실 util이지만 react에서 사용하는 state를 사용하는 경우)
// util: 자주 사용하는 기능들을 모아놓은 함수
