import React from "react";
import { BiError } from "react-icons/bi";
const Error = ({ error }) => {
  return (
    <div className="bg-red-600 bg-opacity-40 p-4 flex justify-center items-center mt-3 ">
      <div className="text-red-900 font-semibold flex justify-center items-center">
        <BiError size={20} />
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Error;
