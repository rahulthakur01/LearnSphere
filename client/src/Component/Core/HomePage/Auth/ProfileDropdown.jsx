import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../../Services/oprations/authAPI";
import onClickOutSide from "../../../../hooks/onClickOutSide";

const ProfileDropdown = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dropDown, setDropDown] = useState(false);
  const ref = useRef(null);
  onClickOutSide(ref, ()=>setDropDown(false));

  return (
    <>
      <div className="relative" onClick={() => setDropDown(true)}>
        <div className="flex items-center gap-[1px]">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[30px] rounded-full object-cover"
          />
          <AiOutlineCaretDown className="text-sm text-richblack-100" />
        </div>

        {dropDown && (
          <div className="absolute top-10 right-0 rounded-md border-[1px] border-richblack-700 bg-richblack-800 " onClick={(e)=>e.stopPropagation()} ref={ref}>
            <div onClick={() => setDropDown(false)}>
              <Link to="/dashboard/my-profile">
                <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25 ">
                  <VscDashboard className="text-lg" />
                  Dashboard
                </div>
              </Link>
            </div>

            <div
              className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm cursor-pointer text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
              onClick={() => {
                dispatch(logout(navigate));
                setDropDown(false);
              }}
            >
              <IoIosLogOut />
              Logout
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileDropdown;
