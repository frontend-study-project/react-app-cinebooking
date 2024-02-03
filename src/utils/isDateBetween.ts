export const isDateBetween = (startDate: string, endDate: string, selectedDate: string): boolean => {
  const startDateObj: Date = new Date(startDate);
  const endDateObj: Date = new Date(endDate);
  const selectedDateObj: Date = new Date(selectedDate);

  return selectedDateObj >= startDateObj && selectedDateObj <= endDateObj;
};
