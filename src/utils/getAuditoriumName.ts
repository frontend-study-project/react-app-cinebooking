import { auditoriums } from "../data/auditoriums";

export const getAuditoriumName = (id: string): string | undefined => {
  return auditoriums.find((v) => v.id === id)?.name;
};
