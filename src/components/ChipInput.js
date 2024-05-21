import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const ChipInput = ({
  name,
  label,
  placeHolder,
  register,
  errors,
  setValue,
  isSubmitSuccessfull,
}) => {
  const [chips, setChips] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      const chipValue = event.target.value.trim();

      if (chipValue && !chips.includes(chipValue)) {
        const newChips = [...chips, chipValue];
        setChips(newChips);
        event.target.value = "";
      }
    }
  };

  const handleDeleteChip = (index) => {
    const newChips = [...chips];
    newChips.splice(index, 1);
    setChips(newChips);
  };

  useEffect(() => {
    register(name, { required: true });
  }, [register]);

  useEffect(() => {
    setValue(name, chips);
  }, [chips]);

  useEffect(() => {
    setChips([]);
  }, [isSubmitSuccessfull]);

  return (
    <label>
      <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
        {label}
      </p>

      <div
        className={`${
          chips.length > 0 ? "flex" : "hidden"
        } my-2 items-center flex-wrap gap-2`}
      >
        {chips.map((chip, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-purple-900 px-2 py-1 rounded-full"
          >
            <div className="h-[6px] w-[6px] rounded-full bg-black"></div>
            <div className="flex items-center gap-1">
              <p className="text-sm text-gray-400">{chip}</p>
              <p
                className="text-sm text-black cursor-pointer"
                onClick={() => handleDeleteChip(i)}
              >
                <MdClose></MdClose>
              </p>
            </div>
          </div>
        ))}
      </div>

      <input
        type="text"
        name={name}
        placeholder={placeHolder}
        onKeyDown={handleKeyDown}
        style={{
          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
        }}
        className="w-full border-none rounded-[0.5rem] bg-black-200 p-[8px] text-white focus-visible:ring-0 focus-visible:ring-offset-0"
      ></input>
      {errors[name] && (
        <span className="-mt-1 text-[12px] text-red-400">
          {label} is required
        </span>
      )}
    </label>
  );
};

export default ChipInput;
