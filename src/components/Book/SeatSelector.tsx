import Box from "../UI/Box";
import '../../style/SeatSelector.css'

const SeatSelector = () => {
  return (
    <>
      <Box>
        <div className="flex justify-start">
          <div className="flex-1 bg-gray-300 ">
            <div className="moviePic">사진영역</div>
          </div>

          <div className="flex-1">
            <div className="w-64">
              <label htmlFor="select-movie" className="block text-sm font-medium text-gray-700">영화선택</label>
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
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
              </div>
            </div>
          </div>
        </div>
      </Box>가
    </>
  )
}
export default SeatSelector;