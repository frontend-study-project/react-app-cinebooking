export interface Movies {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Details {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: object;
  budget: number;
  genres: number[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any[];
  production_countries: any[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: any[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Theater {
  id: string;
  name: string;
  address_SiDo: string;
  location_LO: number;
  location_LA: number;
}

export interface Auditorium {
  id: string;
  name: string;
  capacity: number;
  theater_id: string;
}

export interface Seat {
  id: string;
  name: string;
  seat_row: string;
  seat_col: number;
  auditorium_id: string;
}

export interface Screen {
  movie_id: number;
  theater_id: string;
  auditorium_id: string;
  date: string;
  startTime: string;
  endTime: string;
}

export interface Reservation {
  id: string;
  user_id: string;
  movie_id: string;
  screen_id: string;
  price: number;
  isActived: boolean;
}

export interface ReservedSeat {
  id: string;
  seat_id: string;
  screen_id: string;
  reservation_id: string;
}

export interface GroupedTheater {
  address: string;
  theater: { id: string; name: string }[];
}

export interface FormattedDate {
  year: number;
  month: number;
  day: number;
  dayOfWeek: string;
}

export interface groupedScreen {
  // movie_id: number;
  theater_id: string;
  auditorium_id: string;
  date: string;
  startTime: string[];
  // endTime: string[];
}
export interface LoginForm {
  "userId": string,
  "password": string
}
export interface JoinForm {
  userId: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}
export interface User {
    id: number;
    userId:  string;
    nickname: string;
}