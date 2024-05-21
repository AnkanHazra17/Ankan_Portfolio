import React, { useEffect, useState } from "react";
import ModalTemp from "./modalTemp";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";
import UploadField from "../UploadField";
import ChipInput from "../ChipInput";
import { addProject } from "../../services/operations/projectApi";

const AddProjectModal = ({ setAddProjectModal }) => {
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
    const tags = JSON.stringify(data.tags);
    addProject({ ...data, tags });
    setIsLoading(false);
  };

  useEffect(() => {
    reset({
      name: "",
      description: "",
      liveLink: "",
      srcLink: "",
    });
  }, [isSubmitSuccessful, reset]);
  return (
    <ModalTemp>
      <div className="flex justify-end">
        <IoClose
          size={21}
          className="cursor-pointer text-gray-400"
          onClick={() => setAddProjectModal(false)}
        ></IoClose>
      </div>
      <div>
        <p className="sm:text-[18px] text-[14px] text-center text-secondary uppercase tracking-wider my-3">
          Add A New Project
        </p>

        <form
          className="w-full flex flex-col gap-5"
          onSubmit={handleSubmit(submitHandler)}
        >
          <label className="flex flex-col w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Project name
            </p>
            <input
              type="text"
              name="name"
              placeholder="Enter Project Name"
              {...register("name", { required: true })}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full border-none rounded-[0.5rem] bg-black-200 p-[8px] text-white focus-visible:ring-0 focus-visible:ring-offset-0"
            ></input>
            {errors.name && (
              <span className="-mt-1 text-[12px] text-red-400">
                Project Name is required
              </span>
            )}
          </label>

          <label className="flex flex-col w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Project description
            </p>
            <textarea
              type="text"
              name="description"
              placeholder="Enter Project Description"
              {...register("description", { required: true })}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full border-none rounded-[0.5rem] bg-black-200 p-[8px] text-white focus-visible:ring-0 focus-visible:ring-offset-0"
            ></textarea>
            {errors.description && (
              <span className="-mt-1 text-[12px] text-red-400">
                Project description is required
              </span>
            )}
          </label>

          <UploadField
            name="projectImage"
            label="Project Image"
            register={register}
            setValue={setValue}
            errors={errors}
            isSubmitSuccessfull={isSubmitSuccessful}
          ></UploadField>

          <ChipInput
            name="tags"
            label="Technologies"
            placeHolder="Technologies used"
            register={register}
            errors={errors}
            setValue={setValue}
            isSubmitSuccessfull={isSubmitSuccessful}
          ></ChipInput>

          <label className="flex flex-col w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Live Link
            </p>
            <input
              type="text"
              name="liveLink"
              placeholder="Enter Live link"
              {...register("liveLink", { required: true })}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full border-none rounded-[0.5rem] bg-black-200 p-[8px] text-white focus-visible:ring-0 focus-visible:ring-offset-0"
            ></input>
            {errors.liveLink && (
              <span className="-mt-1 text-[12px] text-red-400">
                Live link is required
              </span>
            )}
          </label>
          <label className="flex flex-col w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Source Code Link
            </p>
            <input
              type="text"
              name="srcLink"
              placeholder="Enter Source Code Link"
              {...register("srcLink", { required: true })}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full border-none rounded-[0.5rem] bg-black-200 p-[8px] text-white focus-visible:ring-0 focus-visible:ring-offset-0"
            ></input>
            {errors.srcLink && (
              <span className="-mt-1 text-[12px] text-red-400">
                Source Code Link is required
              </span>
            )}
          </label>

          <button
            disabled={isLoading}
            type="submit"
            className="mt-6 rounded-[8px] py-[8px] px-[12px] font-medium bg-white-100 text-black-100"
          >
            {isLoading ? <p>Uploading...</p> : <p>Save</p>}
          </button>
        </form>
      </div>
    </ModalTemp>
  );
};

export default AddProjectModal;
