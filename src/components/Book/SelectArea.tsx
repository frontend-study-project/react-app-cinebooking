import {FaAngleRight, FaArrowRight} from "react-icons/fa";

const SelectArea = () => {
  return (
    <div className='flex justify-between items-center w-full h-[100px] mt-2 bg-gray-200 text-black-1'>
      <div className='flex flex-row items-center gap-5 ml-5'>
        <span>영화선택</span>
        <FaAngleRight className='' />
        <span>극장선택</span>
        <FaAngleRight />
        <span>좌석선택</span>
        <FaAngleRight />
        <span>예매</span>
      </div>
      <div className='flex flex-col justify-center items-center w-[85px] h-[85px] mr-3 border border-black-1 rounded-xl cursor-pointer'>
        <FaArrowRight className='text-3xl' />
        <span className='pt-2 font-bold'>좌석선택</span>
      </div>
    </div>
  )
}
export default SelectArea;