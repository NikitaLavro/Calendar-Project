import { useState, useContext, useEffect } from "react";

//Helpers
import { getDaysInMonth } from "./helpers/helpers";

//Components
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";

//Context
import AppContext from "./context/AppContext";

console.table(getDaysInMonth());

function App() {
  const [currentMonth, setCurrentMonth] = useState(getDaysInMonth());
  const { monthIndex } = useContext(AppContext);

  useEffect(() => {
    setCurrentMonth(getDaysInMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
