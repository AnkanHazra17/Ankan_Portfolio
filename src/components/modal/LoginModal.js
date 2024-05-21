import React, { useEffect, useState } from "react";
import ModalTemp from "./modalTemp";
import { IoClose } from "react-icons/io5";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { LogIn } from "../../services/operations/callAuthApi";

const LoginModal = ({ setLoginModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitHandler = (data) => {
    dispatch(LogIn(data, setLoginModal));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        password: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <ModalTemp>
      <div className="flex justify-end">
        <IoClose
          size={21}
          className="cursor-pointer text-gray-400"
          onClick={() => setLoginModal(false)}
        ></IoClose>
      </div>

      <div>
        <p className="sm:text-[18px] text-[14px] text-center text-secondary uppercase tracking-wider my-3">
          Welcome Back Sir!
        </p>

        <form
          className="w-full flex flex-col gap-5"
          onSubmit={handleSubmit(submitHandler)}
        >
          <label className="flex flex-col w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Email
            </p>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              {...register("email", { required: true })}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full border-none rounded-[0.5rem] bg-black-200 p-[8px] text-white focus-visible:ring-0 focus-visible:ring-offset-0"
            ></input>
            {errors.email && (
              <span className="-mt-1 text-[12px] text-red-400">
                Email is required
              </span>
            )}
          </label>
          <label className="flex flex-col w-full relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              password
            </p>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Your Password"
              {...register("password", { required: true })}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-black-200 p-[8px] text-white focus-visible:ring-0 focus-visible:ring-offset-0 border-none"
            ></input>
            {errors.password && (
              <span className="-mt-1 text-[12px] text-red-400">
                Email is required
              </span>
            )}
            <span
              className=" absolute right-3 top-[38px] cursor-pointer text-richblack-200"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible className="text-lg text-gray-400"></AiOutlineEyeInvisible>
              ) : (
                <AiOutlineEye className="text-lg text-gray-400"></AiOutlineEye>
              )}
            </span>
          </label>

          <button
            type="submit"
            className="mt-6 rounded-[8px] py-[8px] px-[12px] font-medium bg-white-100 text-black-100"
          >
            Log In
          </button>
        </form>
      </div>
    </ModalTemp>
  );
};

export default LoginModal;
