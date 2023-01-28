import { useState, useContext, useEffect } from "react";

//Helpers
import { getDaysInMonth } from "./helpers/helpers";

//Components
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import EventModal from "./components/EventModal";

//Context
import AppContext from "./context/AppContext";

console.log(getDaysInMonth());

function App() {
  const [currentMonth, setCurrentMonth] = useState(getDaysInMonth());
  const { monthIndex, showEventModal } = useContext(AppContext);

  useEffect(() => {
    setCurrentMonth(getDaysInMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {showEventModal && <EventModal />}
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
