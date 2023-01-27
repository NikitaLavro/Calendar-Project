import React from "react";

//MUI Icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CalendarHeader = () => {
  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendar App</h1>
      <button className="border rounded py-2 px-4 mr-5">Today</button>
      <button>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          {<ChevronLeftIcon />}
        </span>
      </button>
      <button>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          {<ChevronRightIcon />}
        </span>
      </button>
    </header>
  );
};

export default CalendarHeader;
