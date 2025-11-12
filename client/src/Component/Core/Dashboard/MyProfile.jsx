import React from "react";
import IconBtn from "../../Common/IconBtn";
import { useSelector } from "react-redux";
import { TiEdit } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  console.log("USER", user);
  return (
    <div className="text-white flex flex-col gap-4">
      <h1 className="text-3xl leading-[38px]">My Profile</h1>
      {/* section 1 */}
      <div className="flex justify-between border-[1px] border-richblack-900 bg-richblack-800 p-6 rounded-md ">
        <div className="flex gap-2 items-center ">
          <img
            src={user?.image}
            alt="profile-image"
            className={`profile-${user?.firstName} w-[70px] rounded-full object-cover`}
          />
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold leading-[18px]">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm leading-[15px] text-richblack-200">
              {user?.email}
            </p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onClick={() => {
            navigate("dashboard/settings");
          }}
        >
          {" "}
          <TiEdit fontSize={20} />{" "}
        </IconBtn>
      </div>

      {/* section 2 */}
      <div className="border-[1px] border-richblack-900 bg-richblack-800 p-6 rounded-md flex flex-col gap-6">
        <div className="flex justify-between items-center ">
          <h1>About</h1>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("dashboard/settings");
            }}
          >
            <TiEdit fontSize={20} />{" "}
          </IconBtn>
        </div>
        <p className="text-sm leading-[15px] text-richblack-200">
          {user?.additionalDetails?.about ?? "write about yourself"}{" "}
        </p>
      </div>

      {/* section 3 */}
      <div className="border-[1px] border-richblack-900 bg-richblack-800 p-6 rounded-md flex flex-col gap-6">
        <div className="flex justify-between items-center ">
          <h1>Personal Details</h1>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("dashboard/settings");
            }}
          >
            <TiEdit fontSize={20} />{" "}
          </IconBtn>
        </div>
        <div className=" w-[50%] ">
          <div className="flex items-start justify-between gap-3  py-2 ">
            <p className="text-sm leading-[15px] text-richblack-200">
              {user?.firstName ?? "First Name"}{" "}
            </p>
            <p className="text-sm leading-[15px] text-richblack-200">
              {user?.lastName ?? "Last Name"}{" "}
            </p>
          </div>

          <div className="flex justify-between gap-8 py-2 ">
            <p className="text-sm leading-[15px] text-richblack-200">
              {user?.email ?? "Email"}{" "}
            </p>
            <p className="text-sm leading-[15px] text-richblack-200">
              {user?.phoneNumber ?? "Add Contact Number"}{" "}
            </p>
          </div>

          <div className="flex justify-between gap-8 py-2 ">
            <p className="text-sm leading-[15px] text-richblack-200">
              {user?.additionalDetails?.gender ?? "Gender"}{" "}
            </p>
            <p className="text-sm leading-[15px] text-richblack-200">
              {user?.additionalDetails?.dateOfBirth ?? "Date of Birth"}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
