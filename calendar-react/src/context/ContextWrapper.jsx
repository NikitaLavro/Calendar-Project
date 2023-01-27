import dayjs from "dayjs";
import React, { useState } from "react";
import AppContext from "./AppContext";

const ContextWrapper = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  return (
    <AppContext.Provider value={{ monthIndex, setMonthIndex }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextWrapper;
