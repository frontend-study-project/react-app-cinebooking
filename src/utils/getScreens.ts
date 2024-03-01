import { screens } from "../data/screens";
import { GroupedScreen, Screen } from "../types";

export const getScreens = (movie_idx: number, theater_id: string): GroupedScreen => {
  const filteredScreens = screens.filter(
    (screen: Screen) => screen.movie_idx === movie_idx && screen.theater_id === theater_id
  );
  const groupedScreens: GroupedScreen = {};

  filteredScreens.forEach((screen) => {
    const { auditorium_id } = screen;

    if (!groupedScreens[auditorium_id]) groupedScreens[auditorium_id] = [];

    groupedScreens[auditorium_id].push(screen);
  });

  return groupedScreens;
};
