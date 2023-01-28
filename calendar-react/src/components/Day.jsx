import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import AppContext from "../context/AppContext";

const Day = ({ day, rowIndex }) => {
  const [dayEvents, setDayEvents] = useState([]);

  const { setDaySelected, setShowEventModal, savedEvents } =
    useContext(AppContext);

  const currentDayClass = () => {
    return day.format("DD--MM--YY") === dayjs().format("DD--MM--YY")
      ? "bg-emerald-200"
      : "";
  };

  useEffect(() => {
    const events = savedEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [savedEvents, day]);

  console.log(day);
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
      ></div>
      {dayEvents.map((evt, i) => (
        <div
          key={i}
          className="bg-blue-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate"
        >
          {evt.title}
        </div>
      ))}
    </div>
  );
};

export default Day;
