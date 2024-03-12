export const isFutureDate = (targetDate: string): boolean => {
  const now: Date = new Date();
  now.setMinutes(now.getMinutes() - 10);
  const target: Date = new Date(targetDate);
  return now < target;
};
