const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_PATH = 'https://api.themoviedb.org/3';
const BASE_LANG = 'ko';
const BASE_REGION = 'KR';
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getNowPlayingMovies = async () => {
  try {
    const res = await fetch(
      `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=${BASE_LANG}-${BASE_REGION}&page=1&region=KR`,
      options
    );
    return await res.json();
  } catch (err) {
    console.error('Error fetching movie data:', err);
  }
};

export const getPopularMovies = async () => {
  try {
    const res = await fetch(
      `${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=${BASE_LANG}-${BASE_REGION}&page=1&region=KR`,
      options
    );
    return res.json();
  } catch (err) {
    console.error('Error fetching movie data:', err);
  }
};

export const getUpcomingMovies = async () => {
  try {
    const res = await fetch(
      `${BASE_PATH}/movie/upcoming?api_key=${API_KEY}&language=${BASE_LANG}-${BASE_REGION}&page=1&region=KR`,
      options
    );
    return res.json();
  } catch (err) {
    console.error('Error fetching movie data:', err);
  }
};

export const getMovieDetails = async (id: number) => {
  try {
    const res = await fetch(
      `${BASE_PATH}/movie/${id}?language=${BASE_LANG}-${BASE_REGION}&page=1&region=KR`,
      options
    );
    return res.json();
  } catch (err) {
    console.error('Error fetching movie data:', err);
  }
};

export const getTheaterList = async (region: string) => {
  try {
    if (region) {
      const res = await fetch(`http://localhost:5173/api/theater/list?region=${region}`, { method: "GET" });
      return res.json();
    } else {
      const res = await fetch(`http://localhost:5173/api/theater/list`, { method: "GET" });
      return res.json();
    }
  } catch (err) {
    console.error("Error fetching movie data:", err);
  }
};

