import { useEffect, useState } from 'react';
import Box from '../UI/Box';
import AgeChip from '../Common/AgeChip';
import SelectArea from './SelectArea';
import { groupedTheater } from '../../data/groupedTheater';
import { getDates } from '../../utils/getDates';
import { getMovieEndDate } from '../../utils/getMovieEndDate';
import { useNowPlayingMoviesQuery } from '../../hooks/useMovie';
import { Movies } from '../../types';
import { isDateBetween } from "../../utils/isDateBetween";

const MovieSelector = () => {
  const { data } = useNowPlayingMoviesQuery();

  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovie] = useState<Movies[]>([]);
  const dates = getDates();

  const [selectMovie, setSelectMovie] = useState<number>(-1);
  const [selectRegion, setSelectRegion] = useState<number>(0);
  const [selectTheater, setSelectTheater] = useState<string>('');
  const [selectDate, setSelectDate] = useState({
    year: 0,
    month: 0,
    day: 0,
    dayOfWeek: '',
  });
  const [selectScreen, setSelecScreen] = useState<string>('');

  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const [isActiveScreen, setIsActiveScreen] = useState<boolean>(false);
  const [isActiveNext, setIsActiveNext] = useState<boolean>(false);

  const handleRegionClick = (key: number) => {
    if (key !== selectRegion) {
      setSelectRegion(key);
      setSelectTheater('');
    }
  };

  useEffect(() => {
    if (!data) return;
    setMovie(data?.results.map((movie) => ({ ...movie })));
    setLoading(false);
  }, [data]);

  useEffect(() => {
    if (selectMovie > -1) {
      const startDate = movies.find(v => v.id === selectMovie)?.release_date;

      if (startDate) {
        setStartDate(startDate);
        setEndDate(getMovieEndDate(startDate));
      }
    }

    if (selectMovie > -1 && selectRegion >= -1 && selectTheater !== '' && selectDate.day > 0) {
      setIsActiveScreen(true);
    }
    else {
      setIsActiveScreen(false);
    }
  }, [selectMovie, selectRegion, selectTheater, selectDate]);

  useEffect(() => {
    if (selectMovie > -1) {
      if (startDate && endDate) {
        if (isDateBetween(startDate, endDate, `${selectDate.year}-${selectDate.month}-${selectDate.day}`)) {
          setSelectDate({
            year: 0,
            month: 0,
            day: 0,
            dayOfWeek: '',
          });
        }
      }
    }
  }, [selectMovie]);

  return (
    <Box>
      {loading ? (
        <>로딩중</>
      ) : (
        <>
          <div className="grid grid-cols-[3fr_3fr_1fr_3fr] grid-rows-[40px_1fr] gap-1 w-full h-[500px] text-black-1 text-sm">
            <div className="bg-gray-200 text-center font-bold leading-[40px]">영화</div>
            <div className="bg-gray-200 text-center font-bold leading-[40px]">극장</div>
            <div className="bg-gray-200 text-center font-bold leading-[40px]">날짜</div>
            <div className="bg-gray-200 text-center font-bold leading-[40px]">시간</div>
            <ul className="bg-gray-200 pl-2 overflow-y-auto scrollbar-thin scrollbar-thumb-black-a">
              {movies.map((movie, key) => (
                <li key={key} className={`flex flex-row items-center w-full p-2 cursor-pointer ${selectMovie === movie.id ? 'font-bold bg-selected' : ''}`} onClick={() => setSelectMovie(movie.id)}>
                  <AgeChip age="ALL" />
                  <span className="pl-2 truncate ...">{movie.title}</span>
                </li>
              ))}
            </ul>
            <div className="flex bg-gray-200 divide-x-2 divide-white overflow-hidden">
              <ul className="w-1/2 overflow-y-auto scrollbar-thin scrollbar-thumb-black-a">
                {groupedTheater.map((v, key) => (
                  <li className={`w-full p-2 text-center cursor-pointer ${selectRegion === key ? 'font-bold' : ''}`} key={key} onClick={() => handleRegionClick(key)}>
                    {v.address}
                  </li>
                ))}
              </ul>
              <ul className="w-1/2 overflow-y-auto scrollbar-thin scrollbar-thumb-black-a">
                {groupedTheater[selectRegion].theater.map((v, key) => (
                  <li className={`w-full p-2 text-center cursor-pointer truncate ... ${selectTheater === v.id ? 'bg-selected font-bold' : ''}`} key={key} onClick={() => setSelectTheater(v.id)}>
                    {v.name.slice(0, -1)}
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
                  onClick={selectMovie === -1 || isDateBetween(startDate, endDate, `${v.year}-${v.month}-${v.day}`) ? () => setSelectDate(v) : undefined}
                >
                  <span className={`pr-2 ${JSON.stringify(selectDate) === JSON.stringify(v) ? 'font-bold' : ''}`}>{v.dayOfWeek}</span>
                  <span className="text-lg font-bold">{v.day}</span>
                </li>
              ))}
            </ul>
            <div className="px-3 bg-gray-200 text-black-1 overflow-y-auto scrollbar-thin scrollbar-thumb-black-a divide-y divide-white">
              {isActiveScreen ? (
                <>
                  <div className="pt-2 pb-4">
                    <span className="block mb-2">
                      <b className="pr-1">2관</b>(총75석)
                    </span>
                    <ul className="flex flex-row flex-wrap gap-x-4 gap-y-3 px-1">
                      <li className="flex flex-row items-center group relative">
                        <div className="absolute left-0 bottom-[calc(100%+3px)] hidden group-hover:block">
                          <div className="px-2 py-1 bg-black-1 text-white text-xs rounded whitespace-nowrap">종료 12:42</div>
                        </div>
                        <button className="mr-1 px-1.5 py-0.5 border border-black-a bg-selected">10:20</button>
                        <span className="text-xs">63석</span>
                      </li>
                      <li className="flex flex-row items-center group relative">
                        <div className="absolute left-0 bottom-[calc(100%+3px)] hidden group-hover:block">
                          <div className="px-2 py-1 bg-black-1 text-white text-xs rounded whitespace-nowrap">종료 12:42</div>
                        </div>
                        <button className="mr-1 px-1.5 py-0.5 border border-black-a">10:20</button>
                        <span className="text-xs">63석</span>
                      </li>
                      <li className="flex flex-row items-center group relative">
                        <div className="absolute left-0 bottom-[calc(100%+3px)] hidden group-hover:block">
                          <div className="px-2 py-1 bg-black-1 text-white text-xs rounded whitespace-nowrap">종료 12:42</div>
                        </div>
                        <button className="mr-1 px-1.5 py-0.5 border border-black-a">10:20</button>
                        <span className="text-xs">63석</span>
                      </li>
                      <li className="flex flex-row items-center group relative">
                        <div className="absolute left-0 bottom-[calc(100%+3px)] hidden group-hover:block">
                          <div className="px-2 py-1 bg-black-1 text-white text-xs rounded whitespace-nowrap">종료 12:42</div>
                        </div>
                        <button className="mr-1 px-1.5 py-0.5 border border-black-a">10:20</button>
                        <span className="text-xs">63석</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-2 pb-4">
                    <span className="block mb-2">
                      <b className="pr-1">3관</b>(총75석)
                    </span>
                    <ul className="flex flex-row flex-wrap gap-x-4 gap-y-3 px-1">
                      <li className="flex flex-row items-center group relative">
                        <div className="absolute left-0 bottom-[calc(100%+3px)] hidden group-hover:block">
                          <div className="px-2 py-1 bg-black-1 text-white text-xs rounded whitespace-nowrap">종료 12:42</div>
                        </div>
                        <button className="mr-1 px-1.5 py-0.5 border border-black-a">10:20</button>
                        <span className="text-xs">63석</span>
                      </li>
                      <li className="flex flex-row items-center group relative">
                        <div className="absolute left-0 bottom-[calc(100%+3px)] hidden group-hover:block">
                          <div className="px-2 py-1 bg-black-1 text-white text-xs rounded whitespace-nowrap">종료 12:42</div>
                        </div>
                        <button className="mr-1 px-1.5 py-0.5 border border-black-a">10:20</button>
                        <span className="text-xs">63석</span>
                      </li>
                      <li className="flex flex-row items-center group relative">
                        <div className="absolute left-0 bottom-[calc(100%+3px)] hidden group-hover:block">
                          <div className="px-2 py-1 bg-black-1 text-white text-xs rounded whitespace-nowrap">종료 12:42</div>
                        </div>
                        <button className="mr-1 px-1.5 py-0.5 border border-black-a">10:20</button>
                        <span className="text-xs">63석</span>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <div>선택</div>
              )}
            </div>
          </div>
          <SelectArea />
        </>
      )}
    </Box>
  );
};
export default MovieSelector;
