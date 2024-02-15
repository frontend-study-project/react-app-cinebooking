interface FormattedDate {
  year: number;
  month: number;
  day: number;
  dayOfWeek: string;
}

export const getDates = (): FormattedDate[] => {
  const formatDate = (date: Date): FormattedDate => {
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1;
    const day: number = date.getDate();
    const dayOfWeek: string = daysOfWeek[date.getDay()];

    return {
      year,
      month,
      day,
      dayOfWeek,
    };
  };

  const daysOfWeek: string[] = ['일', '월', '화', '수', '목', '금', '토'];
  const today: Date = new Date();
  const dates: FormattedDate[] = [formatDate(today)];

  for (let i: number = 1; i < 30; i++) {
    let nextDay: Date = new Date(today);
    nextDay.setDate(today.getDate() + i);
    dates.push(formatDate(nextDay));
  }

  return dates;
};
