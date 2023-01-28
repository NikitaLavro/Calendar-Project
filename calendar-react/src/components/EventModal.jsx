import React, { useContext, useState } from "react";

//Icons
import CloseIcon from "@mui/icons-material/Close";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import AppContext from "../context/AppContext";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import dayjs from "dayjs";

const EventModal = () => {
  const [title, setTitle] = useState();

  const { setShowEventModal } = useContext(AppContext);

  const handleModalClose = (e) => {
    e.preventDefault();
    setShowEventModal(false);
  };

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-sm w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <button>
            <span>
              <DragHandleIcon />
            </span>
          </button>
          <button onClick={(e) => handleModalClose(e)}>
            <span>
              <CloseIcon />
            </span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/6 items-end gap-y-7">
            <div></div>
            <input
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:blue-500"
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <span>
              <CalendarMonthIcon />
            </span>
            <p>{dayjs().format("MMMM, DD, YYYY")}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EventModal;
