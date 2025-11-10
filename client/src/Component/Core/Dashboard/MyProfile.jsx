import React from "react";
import IconBtn from "../../Common/IconBtn";
import { useSelector } from "react-redux";
const MyProfile = () => {
  const{user} = useSelector((state)=>state.profile);
  console.log('USER', user);
  return (
    <div className="text-white">
     
     <div>
      <h1>My Profile</h1>
      <div>
        <img src={user?.image} alt="profile-image" className={`profile-${user?.firstName} w-[60px] rounded-full object-cover`}/>
        <div>
          <p>{user?.firstName + " " + user?.lastName}</p>
          <p>{user?.email}</p>
        </div>
        <IconBtn text="Edit" onClick={()=>{navigate("dashboard/settings")}}/>
      </div>
     </div>
    </div>
  );
};

export default MyProfile;
