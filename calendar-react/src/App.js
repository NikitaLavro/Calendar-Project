import { useState } from "react";
import "./index.css";

//Helpers
import { getDaysInMonth } from "./helpers/helpers";

//Components
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";

console.table(getDaysInMonth());

function App() {
  const [currentMonth, setCurrentMonth] = useState(getDaysInMonth());
  return (
    <>
      <div className="h-screen flex flex-columns">
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
