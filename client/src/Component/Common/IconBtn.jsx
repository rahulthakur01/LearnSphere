import React from "react";

const IconBtn = ({ type, text, onclick, disabled, children, customClass="" }) => {
  return (
    <button type={type} onClick={onclick} disabled={disabled}>
      {children ? (
        <>
          <div className={`flex gap-2 px-5 py-2 rounded-md text-richblack-900 ${customClass}`} >
            <span className="leading-[24px] text-lg">{text}</span>
            {children}
          </div>
        </>
      ) : (
        <div className="flex gap-2 px-5 py-2 bg-yellow-50 border border-red-800 rounded-md text-richblack-900">
        <span className="leading-[24px] text-lg">{text}</span>
        
      </div>
      )}
    </button>
  );
};

export default IconBtn;
