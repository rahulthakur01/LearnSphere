import IconBtn from "./IconBtn";
import onClickOutSide from "../../hooks/onClickOutSide";
import { useRef } from "react";

export default function ConfirmationModal({ modalData }) {
  const modelRef = useRef(null);
  onClickOutSide(modelRef, () => {
    if (modalData?.btn2Handler) {
      modalData?.btn2Handler();
    }
  });

  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-slate-800/50 bg-opacity-10 backdrop-blur-sm">
      <div
        ref={modelRef}
        className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6 text-center"
      >
        <p className="text-2xl font-semibold text-richblack-5">
          {modalData?.text1}
        </p>
        <p className="mt-3 mb-5 leading-6 text-richblack-200">
          {modalData?.text2}
        </p>
        <div className="flex items-center mx-auto justify-center gap-x-4">
          <IconBtn
            onclick={modalData?.btn1Handler}
            text={modalData?.btnText1}
          />
          <button
            className="cursor-pointer rounded-md bg-richblack-200 py-[8px] px-[20px] font-semibold text-richblack-900"
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btnText2}
          </button>
        </div>
      </div>
    </div>
  );
}
