import React from "react";

//Icons
import CloseIcon from "@mui/icons-material/Close";
import DragHandleIcon from "@mui/icons-material/DragHandle";

const EventModal = () => {
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-sm w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <button>
            <span>
              <DragHandleIcon />
            </span>
          </button>
          <button>
            <span>
              <CloseIcon />
            </span>
          </button>
        </header>
      </form>
    </div>
  );
};

export default EventModal;
