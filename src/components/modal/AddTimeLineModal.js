import React, { useEffect, useState } from "react";
import ModalTemp from "./modalTemp";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";
import TimeLinePointsField from "../TimeLinePointsField";
import { addTimeLine } from "../../services/operations/timeLineApi";

const AddTimeLineModal = ({ setAddTimeLineModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (data) => {
    setIsLoading(true);
    const points = JSON.stringify(data.points);
    addTimeLine({ ...data, points });
    setIsLoading(false);
  };

  useEffect(() => {
    reset({
      title: "",
      date: "",
    });
  }, [isSubmitSuccessful, reset]);
  return (
    <ModalTemp>
      <div className="flex justify-end">
        <IoClose
          size={21}
          className="cursor-pointer text-gray-400"
          onClick={() => setAddTimeLineModal(false)}
        ></IoClose>
      </div>
      <div>
        <p className="sm:text-[18px] text-[14px] text-center text-secondary uppercase tracking-wider my-3">
          Add A New Time Line
        </p>

        <form
          className="w-full flex flex-col gap-5"
          onSubmit={handleSubmit(submitHandler)}
        >
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Time Line Title
            </p>
            <input
              type="text"
              name="title"
              placeholder="Enter Time Line Title"
              {...register("title", { required: true })}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full border-none rounded-[0.5rem] bg-black-200 p-[8px] text-white focus-visible:ring-0 focus-visible:ring-offset-0"
            ></input>
            {errors.title && (
              <span className="-mt-1 text-[12px] text-red-400">
                Time lene title is required
              </span>
            )}
          </label>

          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Date
            </p>
            <input
              type="text"
              name="date"
              placeholder="Month year - month year"
              {...register("date", { required: true })}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full border-none rounded-[0.5rem] bg-black-200 p-[8px] text-white focus-visible:ring-0 focus-visible:ring-offset-0"
            ></input>
            {errors.date && (
              <span className="-mt-1 text-[12px] text-red-400">
                Date is required
              </span>
            )}
          </label>

          <TimeLinePointsField
            name="points"
            label="Learning Journey"
            register={register}
            setValue={setValue}
            errors={errors}
            isSibmitSuccessfull={isSubmitSuccessful}
          ></TimeLinePointsField>

          <button
            disabled={isLoading}
            type="submit"
            className="rounded-[8px] py-[8px] px-[12px] font-medium bg-white-100 text-black-100"
          >
            {isLoading ? <p>Uploading...</p> : <p>Save</p>}
          </button>
        </form>
      </div>
    </ModalTemp>
  );
};

export default AddTimeLineModal;
