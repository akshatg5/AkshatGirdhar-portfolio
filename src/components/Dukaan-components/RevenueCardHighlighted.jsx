import React from "react";
export const RevenueCardBlue = ({ title, amount, orders,Payoutdate }) => {
  return (
    <div>
      <div className="bg-blue-600 shadow-md p-5 rounded-t-md cursor-pointer mt-5 ml-5 mr-5 hover:bg-blue-700">
        <div className="text-white flex">
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
        <div className="flex justify-between mt-5">
          <div className="font-semibold text-3xl text-white">₹ {amount}</div>
          <div className="items-center">
            {orders ? (
              <div className="flex font-medium items-center cursor-pointer underline text-white">
                {orders} order(s)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            ) : null}{" "}
          </div>
        </div>
      </div>
      <div className="flex justify-between p-2 rounded-b-md bg-blue-800 shadow-xl pl-5 pr-5 cursor-pointer ml-5 mr-5 ">
        <div className="text-white">
          Next Payout date:
        </div>
        <div className="text-white">
          {Payoutdate}
        </div>
      </div>
    </div>
  );
};
