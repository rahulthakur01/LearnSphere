import React from "react";

const Tab = ({ tabData, field, setField }) => {
  return (
    <>
      <div className="p-1 my-6 bg-richblack-800 rounded-full flex gap-x-4 max-w-max">
        {tabData.map((ele, index) => {
          return (
            <button
              key={ele.id}
              onClick={() => setField(ele.type)}
              className={`${
               field === ele.type
                  ? "bg-richblack-900 text-richblack-5"
                  : "bg-transparent text-richblack-200"
              } px-5 py-2 rounded-full transition-all duration-200`}
            >
              {ele.tabName}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Tab;
