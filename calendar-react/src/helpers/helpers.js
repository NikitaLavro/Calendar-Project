import dayjs from "dayjs";

export const getDaysInMonth = (month = dayjs().month()) => {
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();

  let currentMonthCount = 0;

  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
};

export const currentDate = () => {
  return dayjs().format("DD, MMMM, YYYY");
};

export const currentTime = () => {
  return dayjs().format("hh:mm:ss");
};
