export const stringToDate = (dateStr: string): Date => {
  const parts = dateStr.split('/').map(value => parseInt(value, 10));

  return new Date(parts[2], parts[1] - 1, parts[0]);  // YYYY, MM, DD
};
