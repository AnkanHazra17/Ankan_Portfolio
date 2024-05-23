import React, { useEffect, useState } from "react";

const TimeLinePointsField = ({
  name,
  label,
  register,
  setValue,
  errors,
  isSibmitSuccessfull,
}) => {
  const [points, setPoints] = useState([]);

  const handleAddPoint = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const point = e.target.value.trim();

      if (point && !points.includes(point)) {
        const newPoints = [...points, point];
        setPoints(newPoints);
        e.target.value = "";
      }
    }
  };

  const handleRemovePoint = (index) => {
    const updatedPoints = [...points];
    updatedPoints.splice(index, 1);
    setPoints(updatedPoints);
  };

  useEffect(() => {
    register(name, { required: true });
  }, [register]);

  useEffect(() => {
    setValue(name, points);
  }, [points]);

  useEffect(() => {
    setPoints([]);
  }, [isSibmitSuccessfull]);
  return (
    <label>
      <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
        {label}
      </p>

      <textarea
        type="text"
        name={name}
        onKeyDown={handleAddPoint}
        placeholder="Add Learning points"
        style={{
          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
        }}
        className="w-full border-none rounded-[0.5rem] bg-black-200 p-[8px] text-white focus-visible:ring-0 focus-visible:ring-offset-0"
      ></textarea>

      {points.length > 0 && (
        <ul className="my-3 flex flex-col gap-2">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-center gap-2 justify-between border border-gray-400 py-1 px-1 rounded-md"
            >
              <span className="text-xs">{point}</span>
              <button
                type="button"
                className="border border-red-500 px-1 py-1 text-xs rounded-lg bg-red-800 text-gray-300"
                onClick={() => handleRemovePoint(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {errors[name] && (
        <span className="-mt-1 text-[12px] text-red-400">
          {label} is required
        </span>
      )}
    </label>
  );
};

export default TimeLinePointsField;
