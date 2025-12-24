export const fill2 = (n: number) => String(n).padStart(2, '0');

export const parseHnM = (current: number) => {
  const date = new Date(current);
  return `${fill2(date.getHours())}:${fill2(date.getMinutes())}`;
};
