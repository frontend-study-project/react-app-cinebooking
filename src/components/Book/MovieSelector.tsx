import { useEffect, useState } from 'react';
import Box from '../UI/Box';
import AgeChip from '../Common/AgeChip';
import SelectArea from './SelectArea';
import { getDates } from '../../utils/getDates';
import { getMovieEndDate } from '../../utils/getMovieEndDate';
import { useNowPlayingMoviesQuery } from '../../hooks/useMovie';
import { GroupedScreen, GroupedTheater, Movies, Theater } from '../../types';
import { isDateBetween } from '../../utils/isDateBetween';
import { getScreens } from '../../utils/getScreens';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectDate, setSelectMovie, setSelectTheater } from '../../slices/bookSlice';
import { RootState } from '../../store';
import { useTheaterListQuery } from "../../hooks/useTheater";
import Loading from "../Common/Loading";

const MovieSelector = () => {
  const dispatch = useDispatch();

  const selectMovie = useSelector((state: RootState) => state.book.selectMovie);
  const [selectRegion, setSelectRegion] = useState<string>("경기");
  const selectTheater = useSelector((state: RootState) => state.book.selectTheater);
  const selectDate = useSelector((state: RootState) => state.book.selectDate);
  const selectScreen = useSelector((state: RootState) => state.book.selectScreen);

  const nowPlayingMoviesData = useNowPlayingMoviesQuery().data;
  const groupedTheatersData = useTheaterListQuery("").data;
  const theatersData = useTheaterListQuery(selectRegion).data;

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movies[]>([]);
  const [groupedTheaters, setGroupedTheaters] = useState<GroupedTheater[]>([]);
  const [theaters, setTheaters] = useState<Theater[]>([]);
  const dates = getDates();
  const [groupedScreens, setGroupedScreens] = useState<GroupedScreen | undefined>();

  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const [isActiveScreen, setIsActiveScreen] = useState<boolean>(false);

  const handleRegionClick = (region: string) => {
    if (region !== selectRegion) {
      setSelectRegion(region);
      dispatch(setSelectTheater(-1));
    }
  };

  useEffect(() => {
    console.log("렌더링");
    console.log(groupedScreens);
  });

  useEffect(() => {
    setLoading(true);
    if (!nowPlayingMoviesData || !groupedTheatersData) return;
    setMovies(nowPlayingMoviesData.results);
    setGroupedTheaters(groupedTheatersData);
    setLoading(false);
  }, [nowPlayingMoviesData, groupedTheatersData]);

  useEffect(() => {
    if (!theatersData) return;
    setTheaters(theatersData[0].theaters);
  }, [theatersData]);

  useEffect(() => {
    if (selectMovie > -1) {
      const startDate = movies.find((v) => v.id === selectMovie)?.release_date;

      if (startDate) {
        setStartDate(startDate);
        setEndDate(getMovieEndDate(startDate));
      }
    }

    if (selectMovie > -1 && selectRegion !== '' && selectTheater !== -1 && selectDate.day > 0) {
      setGroupedScreens(getScreens(movies.findIndex((v) => v.id === selectMovie), selectTheater));
      setIsActiveScreen(true);
    } else {
      setIsActiveScreen(false);
    }
  }, [selectMovie, selectRegion, selectTheater, selectDate]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box>
          <div className="grid grid-cols-[3fr_3fr_1fr_3fr] grid-rows-[40px_1fr] gap-1 w-full h-[500px] text-black-1 text-sm">
            <div className="bg-gray-200 text-center font-bold leading-[40px]">영화</div>
            <div className="bg-gray-200 text-center font-bold leading-[40px]">극장</div>
            <div className="bg-gray-200 text-center font-bold leading-[40px]">날짜</div>
            <div className="bg-gray-200 text-center font-bold leading-[40px]">시간</div>
            <ul className="bg-gray-200 pl-2 overflow-y-auto scrollbar-thin scrollbar-thumb-black-a">
              {movies.map((movie, key) => (
                <li
                  key={key}
                  className={`flex flex-row items-center w-full p-2
                      ${selectMovie === movie.id ? 'font-bold bg-selected' : ''}
                      ${selectDate.day === 0 || isDateBetween(movie.release_date, getMovieEndDate(movie.release_date), `${selectDate.year}-${selectDate.month}-${selectDate.day}`) ? 'cursor-pointer' : 'opacity-30'}
                    `}
                  onClick={selectDate.day === 0 || isDateBetween(movie.release_date, getMovieEndDate(movie.release_date), `${selectDate.year}-${selectDate.month}-${selectDate.day}`) ? () => dispatch(setSelectMovie(movie.id)) : undefined}
                >
                  <AgeChip age="ALL" />
                  <span className="pl-2 truncate ...">{movie.title}</span>
                </li>
              ))}
            </ul>
            <div className="flex bg-gray-200 divide-x-2 divide-white overflow-hidden">
              <ul className="w-1/2 overflow-y-auto scrollbar-thin scrollbar-thumb-black-a">
                {groupedTheaters.map((group) => (
                  <li className={`w-full p-2 text-center cursor-pointer ${selectRegion === group.region ? 'font-bold' : ''}`} key={group.id} onClick={() => handleRegionClick(group.region)}>
                    {group.region}
                  </li>
                ))}
              </ul>
              <ul className="w-1/2 overflow-y-auto scrollbar-thin scrollbar-thumb-black-a">
                {theaters.map((theater) => (
                  <li className={`w-full p-2 text-center cursor-pointer truncate ... ${selectTheater === theater.id ? 'bg-selected font-bold' : ''}`} key={theater.id} onClick={() => dispatch(setSelectTheater(theater.id))}>
                    {theater.name}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="bg-gray-200 overflow-y-auto scrollbar-thin scrollbar-thumb-black-a">
              {dates.map((v, key) => (
                <li
                  className={`w-full p-2 text-center 
                      ${v.dayOfWeek === '토' ? 'text-week-sat' : v.dayOfWeek === '일' ? 'text-week-sun' : 'text-black-1'}
                      ${JSON.stringify(selectDate) === JSON.stringify(v) ? 'bg-selected' : ''}
                      ${selectMovie === -1 || isDateBetween(startDate, endDate, `${v.year}-${v.month}-${v.day}`) ? 'cursor-pointer' : 'opacity-30'}
                    `}
                  key={key}
                  onClick={selectMovie === -1 || isDateBetween(startDate, endDate, `${v.year}-${v.month}-${v.day}`) ? () => dispatch(setSelectDate(v)) : undefined}
                >
                  <span className={`pr-2 ${JSON.stringify(selectDate) === JSON.stringify(v) ? 'font-bold' : ''}`}>{v.dayOfWeek}</span>
                  <span className="text-lg font-bold">{v.day}</span>
                </li>
              ))}
            </ul>
            <div className="px-3 bg-gray-200 text-black-1 overflow-y-auto scrollbar-thin scrollbar-thumb-black-a divide-y divide-white">
              {isActiveScreen && groupedScreens ? (
                <>
                  {Object.entries(groupedScreens).map(([auditorium_id, screens], key) => (
                    <div key={key} className="pt-2 pb-4">
                      <span className="block mb-2">
                        <b className="pr-1">{auditorium_id}</b>(총75석)
                      </span>
                      <ul className="flex flex-row flex-wrap gap-x-4 gap-y-3">
                        {screens.map((screen, key) => (
                          <li key={key} className="flex flex-row items-center group relative">
                            <div className="absolute left-0 bottom-[calc(100%+3px)] hidden group-hover:block">
                              <div className="px-2 py-1 bg-black-1 text-white text-xs rounded whitespace-nowrap">종료 12:42</div>
                            </div>
                            <button className={`mr-1 px-1.5 py-0.5 border border-black-a ${selectScreen === '아이디' ? 'bg-selected' : ''}`}>{screen.startTime}</button>
                            <span className="text-xs">63석</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </>
              ) : (
                <div className="flex justify-center items-center h-full pb-5">영화, 극장, 날짜를 선택해주세요.</div>
              )}
            </div>
          </div>
          <SelectArea />
        </Box>
      )}
    </>
  );
};
export default MovieSelector;
