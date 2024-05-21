import React from "react";
import { IoIosAdd } from "react-icons/io";

const AddButton = ({ children, onClick }) => {
  return (
    <button
      className="mt-6 rounded-[8px] py-[8px] px-[12px] font-medium bg-white-100 text-black-100 flex items-center gap-2"
      onClick={onClick}
    >
      <IoIosAdd size={25}></IoIosAdd>
      {children}
    </button>
  );
};

export default AddButton;
