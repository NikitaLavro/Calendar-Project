import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";

//Icons
import CloseIcon from "@mui/icons-material/Close";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DescriptionIcon from "@mui/icons-material/Description";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteIcon from "@mui/icons-material/Delete";

//dayjs
import dayjs from "dayjs";

const EventModal = () => {
  const {
    daySelected,
    setShowEventModal,
    dispatchCallEvent,
    selectedEvent,
    setSelectedEvent,
  } = useContext(AppContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );

  const handleModalClose = (e) => {
    e.preventDefault();
    setShowEventModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      const calendarEvent = {
        title,
        description,
        updated: false,
        created: false,
        day: daySelected.valueOf(),
        id: selectedEvent ? selectedEvent.id : Date.now(),
      };
      if (selectedEvent) {
        dispatchCallEvent({
          type: "update",
          payload: {
            ...calendarEvent,
            updated: `Updated on ${dayjs().format(
              "DD, MMMM, YYYY"
            )} at ${dayjs().format("hh:mm:ss")}`,
            created: false,
          },
        });
      } else {
        dispatchCallEvent({
          type: "push",
          payload: {
            ...calendarEvent,
            created: `Created on ${dayjs().format(
              "DD, MMMM, YYYY"
            )} at ${dayjs().format("hh:mm:ss")}`,
          },
        });
      }
      setShowEventModal(false);
      setSelectedEvent(null);
    }
  };

  return (
    <>
      <div
        className="h-screen w-full bg-slate-300 opacity-70 fixed"
        onClick={() => setShowEventModal(false)}
      />
      <div className="fixed inset-1/3 translate-x-1/3 h-96 w-80">
        <form
          className="bg-white rounded-lg shadow-sm "
          onSubmit={(e) => e.preventDefault()}
        >
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
              <div className="flex">
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
              </div>

              <div className="flex">
                <input
                  className="pt-3 border-0 text-gray-600    pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:blue-500"
                  type="text"
                  name="description"
                  placeholder="Add a description"
                  value={description}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                />
                <span>
                  <DescriptionIcon />
                </span>
              </div>

              <div className="flex">
                <AccessTimeIcon />
                <p className="mx-2">
                  {selectedEvent && selectedEvent.created}
                  {selectedEvent && selectedEvent.updated}
                  {!selectedEvent && daySelected.format("DD, MMMM, YYYY")}
                </p>
              </div>
            </div>
          </div>
          <footer className="flex justify-end border-t p-3 mt-5">
            {selectedEvent && (
              <button
                onClick={() => {
                  dispatchCallEvent({ type: "delete", payload: selectedEvent });
                  setShowEventModal(false);
                  setSelectedEvent(null);
                }}
                className="mx-2 bg-red-500 hover:bg-red-600 px-6 py-2 rounded text-white"
              >
                {<DeleteIcon />}
              </button>
            )}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
              onClick={handleSubmit}
            >
              Save
            </button>
          </footer>
        </form>
      </div>
    </>
  );
};

export default EventModal;
