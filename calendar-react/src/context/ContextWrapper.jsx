import dayjs from "dayjs";
import React, { useState, useReducer, useEffect } from "react";
import AppContext from "./AppContext";

const savedEventsReduces = (state, { type, payload }) => {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
};

function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

export const ContextWrapper = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventModal, setShowEventModal] = useState(false);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [savedEvents, dispatchCallEvent] = useReducer(
    savedEventsReduces,
    [],
    initEvents
  );

  useEffect(() => {
    console.log(savedEvents);
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  return (
    <AppContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        showEventModal,
        setShowEventModal,
        daySelected,
        setDaySelected,
        dispatchCallEvent,
        savedEvents,
        selectedEvent,
        setSelectedEvent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
