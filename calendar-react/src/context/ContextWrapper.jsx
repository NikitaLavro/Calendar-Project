import dayjs from "dayjs";
import React, { useState } from "react";
import AppContext from "./AppContext";

const ContextWrapper = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventModal, setShowEventModal] = useState(false);
  return (
    <AppContext.Provider
      value={{ monthIndex, setMonthIndex, showEventModal, setShowEventModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextWrapper;
