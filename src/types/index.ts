interface Movies {
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

interface Theater {
  id: string;
  name: string;
  address_SiDo: string;
  location_LO: number;
  location_LA: number;
}

interface Auditorium {
  id: string;
  name: string;
  capacity: number;
  theater_id: string;
}

interface Seat {
  id: string;
  name: string;
  seat_row: string;
  seat_col: number;
  auditorium_id: string;
}

interface Screen {
  movie_id: number;
  theater_id: string;
  auditorium_id: string;
  date: string;
  startTime: string;
  endTime: string;
}

interface Reservation {
  id: string;
  user_id: string;
  screen_id: string;
  price: number;
  isActived: boolean;
}

interface ReservedSeat {
  id: string;
  seat_id: string;
  screen_id: string;
  reservation_id: string;
}

interface GroupedTheater {
  address: string;
  theater: { id: string; name: string }[];
}

interface FormattedDate {
  year: number;
  month: number;
  day: number;
  dayOfWeek: string;
}
