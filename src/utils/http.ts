const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_PATH = "https://api.themoviedb.org/3";
const BASE_LANG = "ko";
const BASE_REGION = "KR";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getNowPlayingMovies = async () => {
  try {
    const res = await fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=${BASE_LANG}-${BASE_REGION}&page=1`, options);
    return await res.json();
  } catch (err) {
    console.error("Error fetching movie data:", err);
  }
};

export const getPopularMovies = async () => {
  try {
    const res = await fetch(`${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=${BASE_LANG}-${BASE_REGION}&page=1`, options);
    return res.json();
  } catch (err) {
    console.error("Error fetching movie data:", err);
  }
};

export const getUpcomingMovies = async () => {
  try {
    const res = await fetch(`${BASE_PATH}/movie/upcoming?api_key=${API_KEY}&language=${BASE_LANG}-${BASE_REGION}&page=1`, options);
    return res.json();
  } catch (err) {
    console.error("Error fetching movie data:", err);
  }
};

export const movieFetcher = async () => {
  const apiUrl = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjdhZmMwMzY4ZWE5ZmQ2MmY2NmJjM2Y2Yjc2YTNjYSIsInN1YiI6IjY1YTBiODE2MmNlZmMyMDEyNTM3NTM1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tmguS-_f-tuirKlSzIh8zaQFtbBbzYcBf3RZUZObO8k';
  // 예은

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
    });

    if (!response.ok) {
      // API 호출이 실패할 경우에 대한 처리
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // 에러 발생 시 적절한 처리
    console.error('Error fetching movie data:', error);
    throw error;
  }
}
