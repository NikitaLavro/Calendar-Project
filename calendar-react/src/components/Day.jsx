import React from "react";
import dayjs from "dayjs";

const Day = ({ day, rowIndex }) => {
  const currentDayClass = () => {
    return day.format("DD--MM--YY") === dayjs().format("DD--MM--YY")
      ? "bg-emerald-200"
      : "";
  };
  return (
    <div
      className={`border border-gray-200 flex flex-col ${currentDayClass()}`}
    >
      <header className="flex flex-col items-center">
        {rowIndex === 0 && (
          <p className="text-small mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className="text-sm p-1 my-1 text-center">{day.format("DD")}</p>
      </header>
    </div>
  );
};

export default Day;
