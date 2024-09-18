// useQuery
// 1. useQuery호출하는 함수만들기(원하는 시점에 호출하기 위해)
//   - const fetchReservationListQuery
// 2. useQuery 호출
//   - queryKey: ['', ]
//   - queryFn

import { useQuery } from '@tanstack/react-query';
import { getReserveList } from '../utils/api/reserve.ts';

export const useFetchReservationListQuery = (id: number) => {
  return useQuery({
    queryKey: ['reserve', id],
    queryFn: () => {
      return getReserveList(id);
    },
  });
};
