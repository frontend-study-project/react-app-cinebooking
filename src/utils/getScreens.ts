import { groupedScreen } from "../types";

export const getScreens = (theater_id: string): groupedScreen[] => {
  const screens = [];

  const startTime = ["09:00", "13:00", "17:00"];

  // screens.push(startTime);

  // return screens;
  return [
    {
      theater_id: theater_id,
      auditorium_id: "T0001",
      date: "2024-02-04",
      startTime,
    },
  ];
};
