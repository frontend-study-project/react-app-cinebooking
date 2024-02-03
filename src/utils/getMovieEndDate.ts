export const getMovieEndDate = (startDate: string): string => {
  const startDateObj: Date = new Date(startDate);
  const endDateObj: Date = new Date(startDateObj.getFullYear(), startDateObj.getMonth() + 2, startDateObj.getDate());
  const endDate: string = endDateObj.getFullYear() + "-" + (endDateObj.getMonth() + 1) + "-" + endDateObj.getDate();

  return endDate;
};
