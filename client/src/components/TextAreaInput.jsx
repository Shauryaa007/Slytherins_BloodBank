import React from "react";
import { useField } from "formik";

const TextAreaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("field", field);
  console.log("meta", meta);

  return (
    <div className="flex flex-col pt-4">
      <label className="text-lg">{label}</label>
      <textarea
        {...field}
        {...props}
        className={`${
          meta.touched && meta.error ? "border border-[#fc8181]" : "border"
        } shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline`}
      />
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default TextAreaInput;
