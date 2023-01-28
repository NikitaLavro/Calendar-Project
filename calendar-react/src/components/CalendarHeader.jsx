import React, { useContext } from "react";
import dayjs from "dayjs";

//MUI Icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import AppContext from "../context/AppContext";

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(AppContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  return (
    <header className="px-4 py-2 m-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendar App</h1>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          {<ChevronLeftIcon />}
        </span>
      </button>
      <h2>{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</h2>

      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          {<ChevronRightIcon />}
        </span>
      </button>
    </header>
  );
};

export default CalendarHeader;
