import dayjs from "dayjs";
import React, { useState } from "react";
import AppContext from "./AppContext";

const ContextWrapper = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventModal, setShowEventModal] = useState(false);
  const [daySelected, setDaySelected] = useState(dayjs());

  return (
    <AppContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        showEventModal,
        setShowEventModal,
        daySelected,
        setDaySelected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextWrapper;
