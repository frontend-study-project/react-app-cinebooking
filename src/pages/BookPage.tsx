import MovieSelector from "../components/Book/MovieSelector";
import SeatSelector from "../components/Book/SeatSelector";

const BookPage = () => {

  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-4rem)] pt-4 pb-10">
      <MovieSelector />
      <SeatSelector />
    </div>
  )
}
export default BookPage;