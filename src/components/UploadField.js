import React, { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";

const UploadField = ({
  name,
  label,
  register,
  setValue,
  errors,
  isSubmitSuccessfull,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSource, setPreviewSource] = useState("");

  const inputeRef = useRef(null);

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const onDrop = (acceptedFile) => {
    const file = acceptedFile[0];
    if (file) {
      previewFile(file);
      setSelectedFile(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    onDrop,
  });

  useEffect(() => {
    register(name, { required: true });
  }, [register]);

  useEffect(() => {
    setValue(name, selectedFile);
  }, [selectedFile, setValue]);

  useEffect(() => {
    setPreviewSource("");
  }, [isSubmitSuccessfull]);

  return (
    <label>
      <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
        {label}
      </p>

      <div className="bg-black-100 rounded-md">
        {previewSource ? (
          <div className="flex w-full flex-col p-6">
            <img
              src={previewSource}
              alt="preview"
              className="h-full w-full rounded-md object-cover"
            ></img>

            <button
              type="button"
              className="mt-3 text-gray-400 underline"
              onClick={() => {
                setPreviewSource("");
                setSelectedFile(null);
                setValue(name, null);
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div
            className="flex w-full flex-col items-center p-6"
            {...getRootProps()}
          >
            <input
              {...getInputProps()}
              ref={inputeRef}
              className="hidden"
            ></input>
            <div className="grid aspect-square w-14 place-items-center rounded-full bg-gray-900">
              <FiUploadCloud className="text-2xl text-purple-900"></FiUploadCloud>
            </div>

            <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-200">
              Drag and drop an image, or click to{" "}
              <span className="font-semibold text-purple-900">Browse</span> a
              file
            </p>

            <ul className="mt-10 flex list-disc justify-between space-x-12 text-center  text-xs text-gray-300">
              <li>Aspect ratio 16:9</li>
              <li>Recommended size 1024x576</li>
            </ul>
          </div>
        )}
      </div>
      {errors[name] && (
        <span className="-mt-1 text-[12px] text-red-400">
          {label} is required
        </span>
      )}
    </label>
  );
};

export default UploadField;
