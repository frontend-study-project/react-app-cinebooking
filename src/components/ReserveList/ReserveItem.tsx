// promise인거 바꾸기(Reserve.ts)
// 포스터도 전달받은 값으로 바꾸기
// 인원수 (people 추가?하기)
// 예매한 날짜 가져오기

import { Reserve } from "../../utils/api/Reserve";

type Props = Reserve;

const ConfirmItem = ({
  id,
  poster,
  movie,
  theater,
  date,
  money,
  seat,
  people,
}: Props) => {
  return (
    <div className="confirmItem flex gap-x-10 border-y p-3 text-sm">
      <div className="confirmNum text-zinc-500">
        <p>예매번호</p>
        <strong className="text-zinc-800">{id}</strong>
        <p className="">(2023.05.20)</p>
      </div>
      <div className="confirmInfo grow">
        <div className="confirmInfoDetail flex gap-x-3">
          <img
            className="w-32"
            src="https://image.tmdb.org/t/p/w300//2xE3NI6zElWhwN9WJ92fqbZKmzZ.jpg"
            alt=""
          />
          <div>
            <h3 className="pb-1 text-lg font-bold">{}</h3>
            <ul>
              <li className="flex gap-x-2 mt-2">
                <p>관람극장</p>
                <strong>{theater}</strong>
              </li>
              <li className="flex gap-x-2 mt-2">
                <p>관람일시</p>
                <strong>{date}</strong>
              </li>
              <li className="flex gap-x-2 mt-2">
                <p>관람인원</p>
                <strong>{people}</strong>
              </li>
              <li className="flex gap-x-2 mt-2">
                <p>관람좌석</p>
                <strong>{seat}</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between w-full border-t mt-10 pt-2">
          <p className="confirmAmount font-bold text-base">
            총 결제금액{" "}
            <em className="not-italic text-pink-400 text-lg">
              {Number(money).toLocaleString()}
            </em>
            원
          </p>
          <button className="border-2 rounded-md border-pink-400 font-bold px-3">
            예매취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmItem;
