import React from "react";

const ModalTemp = ({ children }) => {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-full md:w-[350px] bg-black p-4 rounded-md border border-black-200 overflow-auto max-h-[95vh] no-scrollbar">
        {children}
      </div>
    </div>
  );
};

export default ModalTemp;
