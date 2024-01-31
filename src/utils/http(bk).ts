export const movieFetcher = async () => {
  const apiUrl =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjdhZmMwMzY4ZWE5ZmQ2MmY2NmJjM2Y2Yjc2YTNjYSIsInN1YiI6IjY1YTBiODE2MmNlZmMyMDEyNTM3NTM1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tmguS-_f-tuirKlSzIh8zaQFtbBbzYcBf3RZUZObO8k";

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
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
    console.error("Error fetching movie data:", error);
    throw error;
  }
};
