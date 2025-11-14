import React, { useState, useRef } from "react";
import IconBtn from "../../../Common/IconBtn";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiUpload } from "react-icons/fi";

const ChangeProfilePic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);
  const {token} = useSelector((state)=>state.auth)
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const profileInputRef = useRef(null);
  const handleClick = () => {
    profileInputRef.current.click();
  };
  const handleOnFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleFileUpload =()=>{
    try{
        setLoading(true);
        const formData = new FormData();
        formData.append(imageFile);
        dispatch(updateDisplayPicture(token, formData)).then(()=>{setLoading(false)})
    }catch(error){
        console.log("Errorr....", error);
    }
  }

  return (
    <>
      <div className="text-white flex flex-col gap-4">
        <h1 className="text-3xl leading-[38px]">My Profile</h1>
        <div className="flex gap-[15px] items-center">
          <img
            src={user?.image}
            alt={`profile-${user?.firtName}`}
            className="w-[60px] object-cover rounded-full"
          />
          <div className="flex flex-col gap-3">
            <p className="text-sm text-richblack-500">Change Profile Picture</p>
            <div className="flex gap-3">
              <input
                type="file"
                ref={profileInputRef}
                className="hidden"
                onChange={handleOnFileChange}
              />
              <button
                className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
                onClick={handleClick}
                disabled={disabled}
              >
                {" "}
                Select
              </button>
              <IconBtn text="Upload" onclick={handleFileUpload}>
                <FiUpload fontSize={20} />
              </IconBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeProfilePic;
