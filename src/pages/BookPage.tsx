import MovieSelector from "../components/Book/MovieSelector";
import SeatSelector from "../components/Book/SeatSelector";

const BookPage = () => {

  return (
    <>
      <h1 className="text-2xl font-bold italic">
        예매입니다
      </h1>
      <MovieSelector />
      <SeatSelector />
    </>
  )
}
export default BookPage;