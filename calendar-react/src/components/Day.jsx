import React, { useContext } from "react";
import dayjs from "dayjs";
import AppContext from "../context/AppContext";

const Day = ({ day, rowIndex }) => {
  const { setDaySelected, setShowEventModal } = useContext(AppContext);

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
          <p className="text-small  border border-gray-400 p-2 w-full text-center bg-stone-200">
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p className="text-sm p-1 my-1 text-center bg-stone-200 rounded-lg p-1.5">
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {""}
      </div>
    </div>
  );
};

export default Day;
