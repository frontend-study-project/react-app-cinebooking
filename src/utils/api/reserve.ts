import { options } from "../http";

export interface Reserve {
  id: string;
  poster: string;
  movie: string;
  theater: string;
  date: string;
  seat: string;
  money: string;
  people: number;
}

export const getReserveList = async (id: number): Promise<Reserve[]> => {
  return Promise.resolve([
    {
      id: "001-001",
      poster: "/image/poster.png",
      movie: "듄2",
      theater: "극장정보",
      date: "2024-03-01 09:00",
      seat: "K 12",
      money: "15000",
    },
  ]);
  // try {
  //   const res = await fetch(`api/booking/user/${id}`, options);
  //   return await res.json();
  // } catch (err) {
  //   console.error("Error fetching booking data:", err);
  //   throw err;
  // }
};
