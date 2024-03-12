import ReserveItem from './ReserveItem';
import { useFetchReservationListQuery } from '../../hooks/useReserve';
import { useFetchAuthQuery } from '../../hooks/useAuth';

const ReserveList = () => {
  // 로그인 정보 불러오기
  const { data: user } = useFetchAuthQuery();
  const { data: reserveData } = useFetchReservationListQuery(user?.id || -1); // 원래 빈값인데 숫자 넣어야해서 -1 대입

  if (!Array.isArray(reserveData)) {
    return null;
  }

  return (
    <div className="mt-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 min-h-screen">
      <h2 className="text-2xl font-bold py-2 text-zinc-800">
        MY 예매내역
        <span className="text-zinc-400 text-base ml-3">
          ({reserveData?.length}건)
        </span>
      </h2>
      <section className="confirmList">
        {reserveData.map((item) => (
          <ReserveItem {...item} key={item.id} />
        ))}
      </section>
    </div>
  );
};
export default ReserveList;
