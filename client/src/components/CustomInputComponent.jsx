import React from "react";
import { useField } from "formik";

const CustomComponent = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col pt-4">
      <label className="text-lg">{label}</label>
      <input
        {...field}
        {...props}
        className={`${
          meta.touched && meta.error ? "border border-[#fc8181]" : "border"
        } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline`}
      />
      {meta.touched && meta.error && (
        <div className="text-[#fc8181]">
          {meta.error.message ? meta.error.message : meta.error}
        </div>
      )}
    </div>
  );
};

export default CustomComponent;
