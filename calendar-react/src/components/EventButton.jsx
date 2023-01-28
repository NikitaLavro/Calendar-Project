import React from "react";

//Icons
import CreateIcon from "@mui/icons-material/Create";

const EventButton = () => {
  return (
    <button className="border p-2 rounded-full flex items-center shadow-md hover:scale-105 hover:transition-all">
      <CreateIcon className="mr-2" />
      Create Event
    </button>
  );
};

export default EventButton;
