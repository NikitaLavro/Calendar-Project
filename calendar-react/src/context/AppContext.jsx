import React from "react";

const AppContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  daySelected: null,
  setDaySelected: (day) => {},
  dispatchCallEvent: ({ type, payload }) => {},
  savedEvents: [],
});

export default AppContext;
