import React from "react";

export default function MainInput() {
  return (
    <div>
      <div className="container w-1/3 m-auto p-9 rounded">
        <div className="relative float-label-input">
          <input
            type="text"
            id="name"
            placeholder=" "
            className=" w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3 block appearance-none leading-normal focus:border-blue-400"
          />
          <label
            for="name"
            className="absolute top-3 left-0 text-textSecondary pointer-events-none transition duration-200 ease-in-outbg-white px-2 "
          >
            Empty
          </label>
        </div>

        {/* <div className="relative float-label-input">
          <input
            type="text"
            placeholder=" "
            className=" bg-white w-full focus:outline-none focus:shadow-outline border border-red-500 rounded-md py-3 px-3 block appearance-none leading-normal"
            value="error@mail"
          />
          <label className="absolute top-3 left-0 text-red-500 pointer-events-none transition duration-200 ease-in-outbg-white px-2">
            Error
          </label>
        </div>

        <div className="relative float-label-input">
          <input
            type="text"
            placeholder=" "
            className=" bg-white w-full focus:outline-none focus:shadow-outline border border-green-500 rounded-md py-3 px-3 block appearance-none leading-normal"
            value="success@mail.com"
          />
          <label className="absolute top-3 left-0 text-green-500 pointer-events-none transition duration-200 ease-in-outbg-white px-2">
            Success
          </label>
        </div> */}
      </div>
    </div>
  );
}
