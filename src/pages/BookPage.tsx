import { useSelector } from "react-redux";
import MovieSelector from "../components/Book/MovieSelector";
import SeatSelector from "../components/Book/SeatSelector";
import { RootState } from "../store";

const BookPage = () => {
  const activeSeatSelector = useSelector((state: RootState) => state.book.activeSeatSelector);

  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-4rem)] pt-4 pb-10">
      {!activeSeatSelector ? (
        <MovieSelector />
      ) : (
        <SeatSelector />
      )}
    </div>
  )
}
export default BookPage;