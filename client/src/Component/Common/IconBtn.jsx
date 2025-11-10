import React from "react";

const IconBtn = ({ type, text, onclick, disabled, children }) => {
  return (
    <button type={type} onClick={onclick} disabled={disabled}>
      {children ? (
        <>
          <span>text</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default IconBtn;
