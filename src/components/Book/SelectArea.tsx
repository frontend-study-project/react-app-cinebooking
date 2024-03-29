import { FaAngleRight, FaArrowRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSeatSelector } from '../../slices/bookSlice';
import { RootState } from '../../store';
import { useMovieDetailsQuery } from '../../hooks/useMovie';
import { useEffect, useState } from 'react';
import { Details } from '../../types';

const SelectArea = () => {
  const dispatch = useDispatch();

  const [details, setDetails] = useState<Details>();

  const selectMovie = useSelector((state: RootState) => state.book.selectMovie);
  const selectTheater = useSelector((state: RootState) => state.book.selectTheater);
  const selectDate = useSelector((state: RootState) => state.book.selectDate);
  const selectScreen = useSelector((state: RootState) => state.book.selectScreen);

  const { data, isLoading } = useMovieDetailsQuery(selectMovie);

  const handleNextButtonClick = () => {
    dispatch(setActiveSeatSelector(true));
  };

  useEffect(() => {
    if (!data) return;
    setDetails(data);
  }, [data]);

  return (
    <div className="flex justify-between items-center w-full h-[120px] mt-2 py-2 bg-gray-200 text-black-1">
      <div className="flex flex-row items-center gap-5 h-full ml-5">
        {selectMovie === -1 ? (
          <span>영화선택</span>
        ) : (
          // <span>{selectMovie}</span>
          <div className='relative h-full'>
            <img className="h-full" src={`https://image.tmdb.org/t/p/w300/${details?.poster_path}`} alt="" />
            {isLoading && (
              <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-100 animate-spin dark:text-gray-600 fill-mainColor" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </div>
        )}
        <FaAngleRight />
        <div>
          {selectTheater === -1 && selectDate.day === 0 ? (
            <span>극장선택</span>
          ) : (
            <div className="flex flex-col gap-1 w-[120px] text-sm">
              <div className="flex justify-between">
                <span>극장</span>
                <span>{selectTheater !== -1 ? selectTheater : ''}</span>
              </div>
              <div className="flex justify-between">
                <span>일시</span>
                <span>{selectDate.day > 0 ? `${selectDate.year}-${('0' + selectDate.month).slice(-2)}-${('0' + selectDate.day).slice(-2)}` : ''}</span>
              </div>
              <div className="flex justify-between">
                <span>상영관</span>
                <span>{selectScreen !== '' ? selectScreen : ''}</span>
              </div>
              <div className="flex justify-between">
                <span>인원</span>
                {/* <span>{selectTheater === '' ? '' : selectTheater}</span> */}
              </div>
            </div>
          )}
        </div>
        <FaAngleRight />
        <span>좌석선택</span>
        <FaAngleRight />
        <span>예매</span>
      </div>
      <div className={`flex flex-col justify-center items-center w-[85px] h-[85px] mr-3 border border-black-1 rounded-xl ${selectMovie > -1 && selectTheater !== -1 && selectDate.day > 0 && selectScreen !== "" ? 'cursor-pointer' : 'opacity-30'}`} onClick={selectMovie > -1 && selectTheater !== -1 && selectDate.day > 0 && selectScreen !== "" ? handleNextButtonClick : undefined}>
        <FaArrowRight className="text-3xl" />
        <span className="pt-2 font-bold">좌석선택</span>
      </div>
    </div>
  );
};
export default SelectArea;