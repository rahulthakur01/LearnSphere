import React, { useState } from "react";
import { sidebarLinks } from "../../../data/dashboard-links";
import { useDispatch, useSelector } from "react-redux";
import SidebarLinks from "./SidebarLinks";
import { VscSignOut } from "react-icons/vsc";
import ConfirationModal from "../../Common/ConfirationModal";

const Sidebar = () => {
  const { loading: authLoading, user } = useSelector((state) => state.profile);
  const [confirmationModal, setConfirmationModal] = useState(null);
  if (authLoading) {
    return <div className="mt-40">Loading...</div>;
  }
  console.log("USER TYPE:", user?.accountType);
  return (
    <>
      <div className="bg-richblack-800 py-10 h-[calc(100vh-3.5rem)] border-r-[1px] border-r-richblue-700 flex flex-col gap-10 ">
        <div className="flex flex-col gap-2 mt-8 ">
          {sidebarLinks.map((link) => {
            if (link.type && link.type !== user?.accountType) return;
            return (
              <SidebarLinks key={link.id} link={link} iconName={link.icon} />
            );
          })}
        </div>

        <div className="w-10/12 h-[1px] border bg-richblack-600 my-6 mx-auto"></div>

        <div className="flex flex-col gap-2 ">
          <SidebarLinks
            link={{ name: "settings", path: "dashboard/settings" }}
            iconName="VscSettingsGear"
          />
          <div onClick={()=>setConfirmationModal({
            text1:"Are your sure?",
            text2:"You're logged out to your account",
            btnText1:"Logout",
            btnText2:"Cancel",
            btn1Handler: ()=>{dispatch(logout(navigate))},
            btn2Handler: () =>{setConfirmationModal(null)}
          })}>
            <div className="flex items-center gap-2 text-richblack-5 ml-8 cursor-pointer">
              <VscSignOut />
              <span className="">Logout</span>
            </div>
          </div>
        </div>


          {confirmationModal && <ConfirationModal modalData={confirmationModal}/>}
      </div>
    </>
  );
};

export default Sidebar;
