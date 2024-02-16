import Box from "../UI/Box";
import '../../style/SeatSelector.css'
import SelectArea from "./SelectArea";

const SeatSelector = () => {

  const seats=[];
  for(let i=1; i<=48; i++){
    seats.push(<div key={i} className="seat"></div>)
  }

  return (
    <>
      <Box>
        <div className="flex justify-start">
          <div className="flex-1 bg-gray-300 ">
            <div className="moviePic">사진영역</div>
          </div>

          <div className="flex-1 flex flex-column align-center">
            <div className="w-64">
              <label htmlFor="select-movie" className="block text-sm font-medium text-gray-700">인원선택</label>
              <select id="select-movie" name="영화"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-blue-500">
                <option value="option1">옵션 1</option>
                <option value="option2">옵션 2</option>
                <option value="option3">옵션 3</option>
              </select>
            </div>

            <div>
              <div className="container">
                <div className="screen">screen</div>
              </div>
              <div className="seat_container">
                {seats}
              </div>
            </div>
          </div>
        </div>
        <SelectArea />
      </Box>
    </>
  )
}
export default SeatSelector;