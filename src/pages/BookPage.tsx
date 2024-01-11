import MovieSelectior from "../components/Book/MovieSelectior";
import SeatSelectior from "../components/Book/SeatSelectior";

const BookPage = () => {

  return (
    <>
      <h1 className="text-2xl font-bold italic">
        예매입니다
      </h1>
      <MovieSelectior />
      <SeatSelectior />
    </>
  )
}
export default BookPage;